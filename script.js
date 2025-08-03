// 商务日语学习工具 - 主要JavaScript文件

// 商务日语词汇数据库
const vocabularyData = {
    greetings: [
        { japanese: "おはようございます", chinese: "早上好", romaji: "ohayou gozaimasu", category: "greetings" },
        { japanese: "こんにちは", chinese: "您好", romaji: "konnichiwa", category: "greetings" },
        { japanese: "失礼いたします", chinese: "打扰了", romaji: "shitsurei itashimasu", category: "greetings" },
        { japanese: "お疲れ様でした", chinese: "辛苦了", romaji: "otsukaresama deshita", category: "greetings" },
        { japanese: "よろしくお願いします", chinese: "请多指教", romaji: "yoroshiku onegaishimasu", category: "greetings" },
        { japanese: "申し訳ございません", chinese: "非常抱歉", romaji: "moushiwake gozaimasen", category: "greetings" }
    ],
    meetings: [
        { japanese: "会議", chinese: "会议", romaji: "kaigi", category: "meetings" },
        { japanese: "議題", chinese: "议题", romaji: "gidai", category: "meetings" },
        { japanese: "発表", chinese: "发表", romaji: "happyou", category: "meetings" },
        { japanese: "資料", chinese: "资料", romaji: "shiryou", category: "meetings" },
        { japanese: "意見", chinese: "意见", romaji: "iken", category: "meetings" },
        { japanese: "提案", chinese: "提案", romaji: "teian", category: "meetings" },
        { japanese: "決定", chinese: "决定", romaji: "kettei", category: "meetings" },
        { japanese: "承認", chinese: "批准", romaji: "shounin", category: "meetings" }
    ],
    emails: [
        { japanese: "件名", chinese: "主题", romaji: "kenmei", category: "emails" },
        { japanese: "添付", chinese: "附件", romaji: "tenpu", category: "emails" },
        { japanese: "返信", chinese: "回复", romaji: "henshin", category: "emails" },
        { japanese: "確認", chinese: "确认", romaji: "kakunin", category: "emails" },
        { japanese: "報告", chinese: "报告", romaji: "houkoku", category: "emails" },
        { japanese: "連絡", chinese: "联络", romaji: "renraku", category: "emails" },
        { japanese: "依頼", chinese: "委托", romaji: "irai", category: "emails" },
        { japanese: "急用", chinese: "紧急", romaji: "kyuuyou", category: "emails" }
    ],
    negotiations: [
        { japanese: "契約", chinese: "合同", romaji: "keiyaku", category: "negotiations" },
        { japanese: "条件", chinese: "条件", romaji: "jouken", category: "negotiations" },
        { japanese: "価格", chinese: "价格", romaji: "kakaku", category: "negotiations" },
        { japanese: "割引", chinese: "折扣", romaji: "waribiki", category: "negotiations" },
        { japanese: "合意", chinese: "同意", romaji: "goui", category: "negotiations" },
        { japanese: "交渉", chinese: "谈判", romaji: "koushou", category: "negotiations" },
        { japanese: "妥協", chinese: "妥协", romaji: "dakyou", category: "negotiations" },
        { japanese: "締結", chinese: "签约", romaji: "teiketsu", category: "negotiations" }
    ],
    presentations: [
        { japanese: "プレゼンテーション", chinese: "演示", romaji: "purezentēshon", category: "presentations" },
        { japanese: "スライド", chinese: "幻灯片", romaji: "suraido", category: "presentations" },
        { japanese: "説明", chinese: "说明", romaji: "setsumei", category: "presentations" },
        { japanese: "グラフ", chinese: "图表", romaji: "gurafu", category: "presentations" },
        { japanese: "データ", chinese: "数据", romaji: "dēta", category: "presentations" },
        { japanese: "分析", chinese: "分析", romaji: "bunseki", category: "presentations" },
        { japanese: "結論", chinese: "结论", romaji: "ketsuron", category: "presentations" },
        { japanese: "質問", chinese: "问题", romaji: "shitsumon", category: "presentations" }
    ]
};

// 常用表达数据库
const phrasesData = {
    opening: [
        { 
            japanese: "本日はお忙しい中、お時間をいただき、ありがとうございます。", 
            chinese: "感谢您在百忙之中抽出时间。", 
            usage: "会议开始时的礼貌用语",
            category: "opening"
        },
        { 
            japanese: "それでは、始めさせていただきます。", 
            chinese: "那么，让我们开始吧。", 
            usage: "正式开始会议或演示",
            category: "opening"
        },
        { 
            japanese: "ご紹介いただき、ありがとうございます。", 
            chinese: "感谢您的介绍。", 
            usage: "被介绍后的回应",
            category: "opening"
        }
    ],
    asking: [
        { 
            japanese: "すみませんが、もう一度お聞かせください。", 
            chinese: "不好意思，请再说一遍。", 
            usage: "请求重复说明",
            category: "asking"
        },
        { 
            japanese: "ご質問がございましたら、お聞かせください。", 
            chinese: "如果有问题的话，请提出来。", 
            usage: "邀请提问",
            category: "asking"
        },
        { 
            japanese: "詳しく教えていただけませんか。", 
            chinese: "能详细告诉我吗？", 
            usage: "请求详细说明",
            category: "asking"
        }
    ],
    agreeing: [
        { 
            japanese: "おっしゃる通りです。", 
            chinese: "正如您所说的。", 
            usage: "表示完全同意",
            category: "agreeing"
        },
        { 
            japanese: "それは良いアイデアですね。", 
            chinese: "那是个好主意。", 
            usage: "赞同对方的提议",
            category: "agreeing"
        },
        { 
            japanese: "申し訳ございませんが、少し違う意見です。", 
            chinese: "很抱歉，我有不同的意见。", 
            usage: "礼貌地表达不同意见",
            category: "agreeing"
        }
    ],
    closing: [
        { 
            japanese: "今日はありがとうございました。", 
            chinese: "今天谢谢您。", 
            usage: "会议结束时的感谢",
            category: "closing"
        },
        { 
            japanese: "それでは、失礼いたします。", 
            chinese: "那么，我先告辞了。", 
            usage: "礼貌地结束并离开",
            category: "closing"
        },
        { 
            japanese: "また次回お願いいたします。", 
            chinese: "下次请多关照。", 
            usage: "期待下次合作",
            category: "closing"
        }
    ]
};

// 应用状态管理
class LearningApp {
    constructor() {
        this.currentSection = 'vocabulary';
        this.currentQuiz = null;
        this.learnedVocab = new Set(JSON.parse(localStorage.getItem('learnedVocab') || '[]'));
        this.learnedPhrases = new Set(JSON.parse(localStorage.getItem('learnedPhrases') || '[]'));
        this.quizHistory = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        this.learningHistory = JSON.parse(localStorage.getItem('learningHistory') || '[]');
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderVocabulary();
        this.renderPhrases();
        this.updateProgress();
    }

    setupEventListeners() {
        // 导航按钮事件
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchSection(e.target.dataset.section);
            });
        });

        // 词汇分类筛选
        document.getElementById('vocab-category').addEventListener('change', (e) => {
            this.filterVocabulary(e.target.value);
        });

        // 表达分类筛选
        document.getElementById('phrase-category').addEventListener('change', (e) => {
            this.filterPhrases(e.target.value);
        });

        // 测试相关事件
        document.getElementById('start-quiz').addEventListener('click', () => {
            this.startQuiz();
        });
    }

    switchSection(sectionName) {
        // 更新导航按钮状态
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // 显示对应的内容区域
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionName).classList.add('active');

        this.currentSection = sectionName;

        // 如果切换到进度页面，更新数据
        if (sectionName === 'progress') {
            this.updateProgress();
        }
    }

    renderVocabulary(category = 'all') {
        const container = document.getElementById('vocab-grid');
        container.innerHTML = '';

        let vocabToShow = [];
        if (category === 'all') {
            vocabToShow = Object.values(vocabularyData).flat();
        } else {
            vocabToShow = vocabularyData[category] || [];
        }

        vocabToShow.forEach((vocab, index) => {
            const vocabCard = this.createVocabCard(vocab, index);
            container.appendChild(vocabCard);
        });
    }

    createVocabCard(vocab, index) {
        const card = document.createElement('div');
        const vocabKey = `${vocab.japanese}-${vocab.chinese}`;
        const isLearned = this.learnedVocab.has(vocabKey);
        
        card.className = `vocab-card ${isLearned ? 'learned' : ''}`;
        card.innerHTML = `
            <div class="japanese">${vocab.japanese}</div>
            <div class="chinese">${vocab.chinese}</div>
            <div class="romaji">${vocab.romaji}</div>
            <div class="category-tag">${this.getCategoryName(vocab.category)}</div>
        `;

        card.addEventListener('click', () => {
            this.toggleVocabLearned(vocabKey, card);
        });

        return card;
    }

    toggleVocabLearned(vocabKey, cardElement) {
        if (this.learnedVocab.has(vocabKey)) {
            this.learnedVocab.delete(vocabKey);
            cardElement.classList.remove('learned');
        } else {
            this.learnedVocab.add(vocabKey);
            cardElement.classList.add('learned');
            this.addLearningHistory('vocabulary', '学习了新词汇');
        }
        
        this.saveProgress();
        this.updateProgress();
    }

    renderPhrases(category = 'all') {
        const container = document.getElementById('phrases-container');
        container.innerHTML = '';

        let phrasesToShow = [];
        if (category === 'all') {
            phrasesToShow = Object.values(phrasesData).flat();
        } else {
            phrasesToShow = phrasesData[category] || [];
        }

        phrasesToShow.forEach((phrase, index) => {
            const phraseItem = this.createPhraseItem(phrase, index);
            container.appendChild(phraseItem);
        });
    }

    createPhraseItem(phrase, index) {
        const item = document.createElement('div');
        const phraseKey = `${phrase.japanese}-${phrase.chinese}`;
        const isLearned = this.learnedPhrases.has(phraseKey);
        
        item.className = `phrase-item ${isLearned ? 'learned' : ''}`;
        item.innerHTML = `
            <div class="phrase-japanese">${phrase.japanese}</div>
            <div class="phrase-chinese">${phrase.chinese}</div>
            <div class="phrase-usage">${phrase.usage}</div>
        `;

        item.addEventListener('click', () => {
            this.togglePhraseLearned(phraseKey, item);
        });

        return item;
    }

    togglePhraseLearned(phraseKey, itemElement) {
        if (this.learnedPhrases.has(phraseKey)) {
            this.learnedPhrases.delete(phraseKey);
            itemElement.classList.remove('learned');
        } else {
            this.learnedPhrases.add(phraseKey);
            itemElement.classList.add('learned');
            this.addLearningHistory('phrases', '学习了新表达');
        }
        
        this.saveProgress();
        this.updateProgress();
    }

    filterVocabulary(category) {
        this.renderVocabulary(category);
    }

    filterPhrases(category) {
        this.renderPhrases(category);
    }

    startQuiz() {
        const quizType = document.getElementById('quiz-type').value;
        const container = document.getElementById('quiz-container');
        
        let quizData = [];
        if (quizType === 'vocab') {
            quizData = Object.values(vocabularyData).flat();
        } else {
            quizData = Object.values(phrasesData).flat();
        }

        // 随机选择10个问题
        const shuffled = quizData.sort(() => 0.5 - Math.random());
        const questions = shuffled.slice(0, Math.min(10, shuffled.length));

        this.currentQuiz = {
            type: quizType,
            questions: questions,
            currentQuestion: 0,
            score: 0,
            answers: []
        };

        this.renderQuizQuestion();
    }

    renderQuizQuestion() {
        if (!this.currentQuiz) return;

        const container = document.getElementById('quiz-container');
        const quiz = this.currentQuiz;
        const question = quiz.questions[quiz.currentQuestion];

        if (quiz.currentQuestion >= quiz.questions.length) {
            this.showQuizResults();
            return;
        }

        const isVocabQuiz = quiz.type === 'vocab';
        const questionText = isVocabQuiz ? question.japanese : question.japanese;
        
        // 生成选项（正确答案 + 3个错误答案）
        let options = [isVocabQuiz ? question.chinese : question.chinese];
        const allItems = quiz.questions;
        
        while (options.length < 4) {
            const randomItem = allItems[Math.floor(Math.random() * allItems.length)];
            const optionText = isVocabQuiz ? randomItem.chinese : randomItem.chinese;
            if (!options.includes(optionText)) {
                options.push(optionText);
            }
        }
        
        // 打乱选项顺序
        options = options.sort(() => 0.5 - Math.random());

        container.innerHTML = `
            <div class="quiz-question">
                <div class="question-text">${questionText}</div>
                <div class="quiz-options">
                    ${options.map(option => `
                        <div class="quiz-option" data-option="${option}">
                            ${option}
                        </div>
                    `).join('')}
                </div>
                <div class="quiz-controls-bottom">
                    <div class="quiz-progress">
                        问题 ${quiz.currentQuestion + 1} / ${quiz.questions.length}
                    </div>
                    <button class="btn btn-secondary" id="skip-question">跳过</button>
                </div>
            </div>
        `;

        // 添加选项点击事件
        container.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectQuizOption(e.target);
            });
        });

        // 添加跳过按钮事件
        document.getElementById('skip-question').addEventListener('click', () => {
            this.nextQuestion(false);
        });
    }

    selectQuizOption(optionElement) {
        const container = document.getElementById('quiz-container');
        const question = this.currentQuiz.questions[this.currentQuiz.currentQuestion];
        const correctAnswer = this.currentQuiz.type === 'vocab' ? question.chinese : question.chinese;
        const selectedAnswer = optionElement.dataset.option;
        const isCorrect = selectedAnswer === correctAnswer;

        // 禁用所有选项
        container.querySelectorAll('.quiz-option').forEach(opt => {
            opt.style.pointerEvents = 'none';
            if (opt.dataset.option === correctAnswer) {
                opt.classList.add('correct');
            } else if (opt === optionElement && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });

        // 记录答案
        this.currentQuiz.answers.push({
            question: question,
            selected: selectedAnswer,
            correct: correctAnswer,
            isCorrect: isCorrect
        });

        if (isCorrect) {
            this.currentQuiz.score++;
        }

        // 2秒后显示下一题
        setTimeout(() => {
            this.nextQuestion(isCorrect);
        }, 2000);
    }

    nextQuestion(wasCorrect) {
        this.currentQuiz.currentQuestion++;
        this.renderQuizQuestion();
    }

    showQuizResults() {
        const container = document.getElementById('quiz-container');
        const quiz = this.currentQuiz;
        const percentage = Math.round((quiz.score / quiz.questions.length) * 100);

        container.innerHTML = `
            <div class="quiz-question">
                <div class="question-text">测试完成！</div>
                <div style="text-align: center; margin: 30px 0;">
                    <h3>你的得分: ${quiz.score} / ${quiz.questions.length}</h3>
                    <h3>正确率: ${percentage}%</h3>
                </div>
                <div class="quiz-controls-bottom">
                    <button class="btn btn-primary" id="restart-quiz">再试一次</button>
                    <button class="btn btn-secondary" id="review-answers">查看答案</button>
                </div>
            </div>
        `;

        // 保存测试记录
        this.saveQuizResult(quiz.type, quiz.score, quiz.questions.length, percentage);
        this.addLearningHistory('quiz', `完成${quiz.type === 'vocab' ? '词汇' : '表达'}测试，得分 ${percentage}%`);

        // 添加按钮事件
        document.getElementById('restart-quiz').addEventListener('click', () => {
            this.startQuiz();
        });

        document.getElementById('review-answers').addEventListener('click', () => {
            this.showAnswerReview();
        });

        this.currentQuiz = null;
        this.updateProgress();
    }

    showAnswerReview() {
        const container = document.getElementById('quiz-container');
        const answers = this.currentQuiz?.answers || [];
        
        container.innerHTML = `
            <div class="quiz-question">
                <div class="question-text">答案回顾</div>
                <div style="max-height: 400px; overflow-y: auto;">
                    ${answers.map((answer, index) => `
                        <div style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid ${answer.isCorrect ? '#48bb78' : '#f56565'};">
                            <div><strong>问题 ${index + 1}:</strong> ${answer.question.japanese}</div>
                            <div style="color: #48bb78;"><strong>正确答案:</strong> ${answer.correct}</div>
                            <div style="color: ${answer.isCorrect ? '#48bb78' : '#f56565'};"><strong>你的答案:</strong> ${answer.selected}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="quiz-controls-bottom">
                    <button class="btn btn-primary" id="back-to-quiz">返回测试</button>
                </div>
            </div>
        `;

        document.getElementById('back-to-quiz').addEventListener('click', () => {
            container.innerHTML = `
                <div class="quiz-welcome">
                    <h3>选择测试类型并开始学习</h3>
                    <p>通过测试来检验你的学习成果吧！</p>
                </div>
            `;
        });
    }

    saveQuizResult(type, score, total, percentage) {
        const result = {
            date: new Date().toLocaleDateString(),
            type: type,
            score: score,
            total: total,
            percentage: percentage
        };
        
        this.quizHistory.push(result);
        localStorage.setItem('quizHistory', JSON.stringify(this.quizHistory));
    }

    addLearningHistory(type, action) {
        const historyItem = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            type: type,
            action: action
        };
        
        this.learningHistory.unshift(historyItem);
        // 只保留最近50条记录
        if (this.learningHistory.length > 50) {
            this.learningHistory = this.learningHistory.slice(0, 50);
        }
        
        localStorage.setItem('learningHistory', JSON.stringify(this.learningHistory));
    }

    updateProgress() {
        // 更新统计数据
        document.getElementById('learned-vocab').textContent = this.learnedVocab.size;
        document.getElementById('learned-phrases').textContent = this.learnedPhrases.size;
        document.getElementById('quiz-count').textContent = this.quizHistory.length;
        
        // 计算平均正确率
        const avgAccuracy = this.quizHistory.length > 0 
            ? Math.round(this.quizHistory.reduce((sum, quiz) => sum + quiz.percentage, 0) / this.quizHistory.length)
            : 0;
        document.getElementById('accuracy').textContent = `${avgAccuracy}%`;

        // 更新学习历史
        this.renderLearningHistory();
    }

    renderLearningHistory() {
        const container = document.getElementById('learning-history');
        if (!container) return;

        const recentHistory = this.learningHistory.slice(0, 10);
        
        container.innerHTML = recentHistory.map(item => `
            <div class="history-item">
                <div class="history-date">${item.date} ${item.time}</div>
                <div class="history-action">${item.action}</div>
            </div>
        `).join('') || '<div style="text-align: center; color: #718096;">暂无学习记录</div>';
    }

    saveProgress() {
        localStorage.setItem('learnedVocab', JSON.stringify([...this.learnedVocab]));
        localStorage.setItem('learnedPhrases', JSON.stringify([...this.learnedPhrases]));
    }

    getCategoryName(category) {
        const categoryNames = {
            greetings: '问候礼仪',
            meetings: '会议',
            emails: '邮件',
            negotiations: '谈判',
            presentations: '演示',
            opening: '开场白',
            asking: '询问',
            agreeing: '同意/反对',
            closing: '结束语'
        };
        return categoryNames[category] || category;
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new LearningApp();
});