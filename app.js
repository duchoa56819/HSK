// ============ State ============
let currentLevel = 'all';
let currentPage = 'dashboard';
let progress = JSON.parse(localStorage.getItem('hsk_progress') || '{}');
let quizState = {};
let fcState = {};
let writingState = { words: [], index: 0, writer: null };

function getWords() {
    if (currentLevel === 'all') return HSK_DATA;
    return HSK_DATA.filter(w => w.l === parseInt(currentLevel));
}

// ============ Navigation ============
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelector(`[data-page="${page}"]`).classList.add('active');
    currentPage = page;
    if (page === 'dashboard') updateDashboard();
    if (page === 'flashcard') initFlashcards();
    if (page === 'quiz') startQuiz();
    if (page === 'grammar') renderGrammar();
    if (page === 'writing') initWriting();
    if (page === 'wordlist') renderWordList();
}

function setLevel(level) {
    currentLevel = level;
    document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-level="${level}"]`).classList.add('active');
    if (currentPage === 'dashboard') updateDashboard();
    if (currentPage === 'flashcard') initFlashcards();
    if (currentPage === 'quiz') startQuiz();
    if (currentPage === 'grammar') renderGrammar();
    if (currentPage === 'writing') initWriting();
    if (currentPage === 'wordlist') renderWordList();
}

// ============ Progress ============
function getWordProgress(hanzi) {
    return progress[hanzi] || { score: 0, attempts: 0, correct: 0 };
}

function updateWordProgress(hanzi, correct) {
    if (!progress[hanzi]) progress[hanzi] = { score: 0, attempts: 0, correct: 0 };
    progress[hanzi].attempts++;
    if (correct) {
        progress[hanzi].correct++;
        progress[hanzi].score = Math.min(progress[hanzi].score + 1, 3);
    } else {
        progress[hanzi].score = Math.max(progress[hanzi].score - 1, 0);
    }
    localStorage.setItem('hsk_progress', JSON.stringify(progress));
}

function resetProgress() {
    if (confirm('Bạn có chắc muốn reset toàn bộ tiến độ?')) {
        progress = {};
        localStorage.removeItem('hsk_progress');
        updateDashboard();
    }
}

// ============ Dashboard ============
function updateDashboard() {
    const words = getWords();
    const total = words.length;
    let learned = 0, mastered = 0, totalAttempts = 0, totalCorrect = 0;
    words.forEach(w => {
        const p = getWordProgress(w.h);
        if (p.score >= 1) learned++;
        if (p.score >= 3) mastered++;
        totalAttempts += p.attempts;
        totalCorrect += p.correct;
    });
    const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    animateNumber('stat-total', total);
    animateNumber('stat-learned', learned);
    animateNumber('stat-mastered', mastered);
    document.querySelector('#stat-accuracy .stat-number').textContent = accuracy + '%';

    const hsk1Words = HSK_DATA.filter(w => w.l === 1);
    const hsk2Words = HSK_DATA.filter(w => w.l === 2);
    const hsk1Learned = hsk1Words.filter(w => getWordProgress(w.h).score >= 1).length;
    const hsk2Learned = hsk2Words.filter(w => getWordProgress(w.h).score >= 1).length;
    const hsk1Pct = hsk1Words.length > 0 ? Math.round((hsk1Learned / hsk1Words.length) * 100) : 0;
    const hsk2Pct = hsk2Words.length > 0 ? Math.round((hsk2Learned / hsk2Words.length) * 100) : 0;

    document.getElementById('progress-hsk1').style.width = hsk1Pct + '%';
    document.getElementById('progress-hsk1-text').textContent = hsk1Pct + '%';
    document.getElementById('progress-hsk2').style.width = hsk2Pct + '%';
    document.getElementById('progress-hsk2-text').textContent = hsk2Pct + '%';
}

function animateNumber(cardId, target) {
    const el = document.querySelector('#' + cardId + ' .stat-number');
    let current = 0;
    const step = Math.max(1, Math.floor(target / 20));
    const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
    }, 30);
}

// ============ Flashcard ============
function initFlashcards() {
    const words = shuffle([...getWords()]);
    fcState = { words: words.slice(0, Math.min(20, words.length)), index: 0 };
    showFlashcard();
}

function showFlashcard() {
    const { words, index } = fcState;
    if (index >= words.length) {
        initFlashcards();
        return;
    }
    const word = words[index];
    document.getElementById('fc-hanzi').textContent = word.h;
    document.getElementById('fc-pinyin').textContent = word.p;
    document.getElementById('fc-meaning').textContent = word.m;
    document.getElementById('fc-example').textContent = '';
    document.getElementById('fc-counter').textContent = (index + 1) + ' / ' + words.length;
    document.getElementById('fc-progress').style.width = ((index + 1) / words.length * 100) + '%';
    document.getElementById('flashcard-inner').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('flashcard-inner').classList.toggle('flipped');
}

function rateCard(rating) {
    const word = fcState.words[fcState.index];
    updateWordProgress(word.h, rating !== 'hard');
    fcState.index++;
    showFlashcard();
}

// ============ Quiz ============
function startQuiz() {
    const words = shuffle([...getWords()]);
    quizState = {
        words: words.slice(0, Math.min(10, words.length)),
        index: 0,
        score: 0,
        answered: false
    };
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-options').style.display = 'flex';
    document.getElementById('quiz-counter').parentElement.style.display = 'flex';
    showQuestion();
}

function showQuestion() {
    const { words, index, score } = quizState;
    if (index >= words.length) { showQuizResult(); return; }
    const word = words[index];
    const qType = Math.random() > 0.5 ? 'meaning' : 'pinyin';
    quizState.answered = false;
    document.getElementById('quiz-hanzi').textContent = word.h;
    document.getElementById('quiz-type').textContent = qType === 'meaning' ? 'Chọn nghĩa đúng:' : 'Chọn pinyin đúng:';
    document.getElementById('quiz-counter').textContent = 'Câu ' + (index + 1) + ' / ' + words.length;
    document.getElementById('quiz-score').textContent = 'Điểm: ' + score;
    document.getElementById('quiz-next').style.display = 'none';

    const allWords = HSK_DATA;
    let options = [word];
    while (options.length < 4) {
        const r = allWords[Math.floor(Math.random() * allWords.length)];
        if (!options.find(o => o.h === r.h)) options.push(r);
    }
    options = shuffle(options);

    const container = document.getElementById('quiz-options');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = qType === 'meaning' ? opt.m : opt.p;
        btn.onclick = () => selectAnswer(btn, opt.h === word.h, word, qType);
        container.appendChild(btn);
    });
}

function selectAnswer(btn, correct, word, qType) {
    if (quizState.answered) return;
    quizState.answered = true;
    btn.classList.add(correct ? 'correct' : 'wrong');
    if (correct) quizState.score++;
    updateWordProgress(word.h, correct);

    // Highlight correct answer
    document.querySelectorAll('.quiz-option').forEach(o => {
        const text = o.textContent;
        const match = qType === 'meaning' ? word.m : word.p;
        if (text === match) o.classList.add('correct');
        o.style.pointerEvents = 'none';
    });
    document.getElementById('quiz-next').style.display = 'block';
}

function nextQuestion() {
    quizState.index++;
    showQuestion();
}

function showQuizResult() {
    const { score, words } = quizState;
    const pct = Math.round((score / words.length) * 100);
    document.getElementById('quiz-options').style.display = 'none';
    document.getElementById('quiz-next').style.display = 'none';
    document.getElementById('quiz-counter').parentElement.style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';

    let title, text;
    if (pct >= 90) { title = '🏆 Xuất sắc!'; text = `Bạn đạt ${score}/${words.length} câu đúng!`; }
    else if (pct >= 70) { title = '👏 Tốt lắm!'; text = `Bạn đạt ${score}/${words.length} câu. Cố thêm nhé!`; }
    else if (pct >= 50) { title = '💪 Cần cố gắng!'; text = `${score}/${words.length} câu. Hãy ôn lại nhé!`; }
    else { title = '📚 Ôn lại thôi!'; text = `${score}/${words.length} câu. Học flashcard thêm nhé!`; }

    document.getElementById('quiz-result-title').textContent = title;
    document.getElementById('quiz-result-text').textContent = text;
}

// ============ Word List ============
function renderWordList() {
    const words = getWords();
    const container = document.getElementById('wordlist-table');
    container.innerHTML = '';
    words.forEach(w => {
        const p = getWordProgress(w.h);
        const status = p.score >= 3 ? '⭐' : p.score >= 1 ? '✅' : '⬜';
        const row = document.createElement('div');
        row.className = 'word-row';
        row.innerHTML = `
            <span class="word-level hsk${w.l}">HSK ${w.l}</span>
            <span class="word-hanzi">${w.h} <button class="icon-btn-small" onclick="speak('${w.h}'); event.stopPropagation();" title="Nghe phát âm">🔊</button></span>
            <span class="word-pinyin">${w.p}</span>
            <span class="word-meaning">${w.m}</span>
            <span class="word-status">${status}</span>
        `;
        container.appendChild(row);
    });
}

function filterWords() {
    const query = document.getElementById('search-input').value.toLowerCase();
    document.querySelectorAll('.word-row').forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? 'grid' : 'none';
    });
}

// ============ Grammar ============
function getGrammarItems() {
    if (currentLevel === 'all') return HSK_GRAMMAR;
    return HSK_GRAMMAR.filter(g => g.l === parseInt(currentLevel));
}

function renderGrammar() {
    const items = getGrammarItems();
    const container = document.getElementById('grammar-list');
    container.innerHTML = '';
    items.forEach(g => {
        const card = document.createElement('div');
        card.className = 'grammar-card';
        card.id = 'grammar-' + g.id;
        let exHtml = '';
        g.examples.forEach(ex => {
            exHtml += `<div class="example-item">
                <div class="example-cn">${ex.cn}</div>
                <div class="example-py">${ex.py}</div>
                <div class="example-vi">${ex.vi}</div>
            </div>`;
        });
        card.innerHTML = `
            <div class="grammar-header" onclick="toggleGrammar(${g.id})">
                <span class="grammar-level hsk${g.l}">HSK ${g.l}</span>
                <span class="grammar-title">${g.title}</span>
                <span class="grammar-toggle">▼</span>
            </div>
            <div class="grammar-body">
                <div class="grammar-content">
                    <div class="grammar-rule">${g.rule}</div>
                    <div class="grammar-explain">${g.explain}</div>
                    <div class="grammar-examples">
                        <h3>Ví dụ</h3>
                        ${exHtml}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleGrammar(id) {
    const card = document.getElementById('grammar-' + id);
    card.classList.toggle('open');
}

// ============ Text-to-Speech ============
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        window.speechSynthesis.speak(utterance);
    }
}

function playCurrentFlashcardAudio(e) {
    e.stopPropagation();
    const word = fcState.words[fcState.index];
    if (word) speak(word.h);
}

function playWritingAudio() {
    const word = writingState.words[writingState.index];
    if (word) speak(word.h);
}

// ============ Writing Practice ============
function initWriting() {
    // Only pick single characters for writing practice
    const words = shuffle([...getWords()]).filter(w => w.h.length === 1);
    writingState = { words: words.slice(0, 20), index: 0, writer: null };
    showWritingWord();
}

function showWritingWord() {
    const { words, index } = writingState;
    if (index >= words.length) {
        initWriting();
        return;
    }
    const word = words[index];
    document.getElementById('writing-word-info').textContent = `${word.h} (${word.p}) - ${word.m}`;
    document.getElementById('writing-feedback').textContent = 'Sẵn sàng!';

    const target = document.getElementById('character-target');
    target.innerHTML = '';
    
    writingState.writer = HanziWriter.create('character-target', word.h, {
        width: 300,
        height: 300,
        padding: 10,
        strokeColor: '#f1f5f9',
        radicalColor: '#8b5cf6',
        outlineColor: '#334155',
        showOutline: true,
        strokeAnimationSpeed: 1.5,
        delayBetweenStrokes: 150
    });
}

function animateStroke() {
    if (writingState.writer) {
        document.getElementById('writing-feedback').textContent = 'Đang biểu diễn...';
        writingState.writer.animateCharacter({
            onComplete: () => {
                document.getElementById('writing-feedback').textContent = 'Đã xong!';
            }
        });
    }
}

function startWritingQuiz() {
    if (writingState.writer) {
        document.getElementById('writing-feedback').textContent = 'Hãy viết chữ vào khung (chú ý nét bút)';
        writingState.writer.quiz({
            onMistake: (strokeData) => {
                document.getElementById('writing-feedback').textContent = 'Nét sai, thử lại nhé!';
                document.getElementById('writing-feedback').style.color = 'var(--warning)';
            },
            onCorrectStroke: (strokeData) => {
                document.getElementById('writing-feedback').textContent = 'Tốt lắm!';
                document.getElementById('writing-feedback').style.color = 'var(--success)';
            },
            onComplete: (summaryData) => {
                document.getElementById('writing-feedback').textContent = '🎉 Tuyệt vời! Bạn đã viết đúng!';
                document.getElementById('writing-feedback').style.color = 'var(--accent-3)';
                updateWordProgress(writingState.words[writingState.index].h, true);
            }
        });
    }
}

function nextWritingWord() {
    writingState.index++;
    showWritingWord();
}

// ============ Utilities ============
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ============ Init ============
document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
});
