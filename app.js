
const questions = [
    'I like to think of ways to help others who are suffering emotionally, physically and spiritually.',
    'I enjoy spending time in studying the Bible.',
    'I think people should say what they mean and mean what they say about God"s truth even if it may hurt the feelings of the listeners.',
    'I give more than the biblical tithe to the Lord.',
    'I enjoy responsibilities which involve helping other Christians grow spiritually.',
    'I enjoy doing small tasks that need to be done without being asked to do them.',
    'I like to take a project, break it down into various parts and systematically organise a plan to arrive at the final goal.',
    'I find it very difficult to discipline others unless I am really convinced it will help them.',
    'In studying the Bible, I like to study the passage in context and find what it meant to the writer before trying to apply it to myself.',
    'When situations are not right I feel an urge to speak up about them in order to correct them.',
    'When I hear of someone in need. I think of the amount of money I can give to help them.',
    'I am a possibility thinker, believing that all things are possible with God.',
    'I would rather do a task myself than work with a group or committee to get it done.',
    'If a project needs to be done and nobody is in charge, I like to volunteer to get it organised.',
    'I can sense immediately whether the person I am talking to is hurting or is really happy.',
    'I organise my thoughts in a systematic way after careful research and study.',
    'I have the ability to discern deception, dishonesty and compromise in the motives of others.',
    'I prefer to give to the work of the Lord amounts suggested by the Lord rather than have others suggest how much I should give.',
    'I have the ability to help people see how their trials and difficulties can be opportunities for spiritual growth.',
    'I would rather do a number of short-range tasks than do one long-range task a year or more.',
    'I have the ability to see overall goals and the finished picture of a project, while others may see only the various pieces.',
    'I will go to almost any length to avoid hurting the feelings of others.',
    'I like to see things prepared and taught in a factual and systematic way rather than having people just share their personal experiences.',
    'Injustice, dishonesty and unrighteousness in the church and community bothers me enough that I am willing to speak up even though some may be offended.',
    'When I feel led by the Lord to give, I give generously without thinking of the sacrifice this may involve.',
    'I would rather talk with someone about their problems and share with them practical help from the Bible than send them to someone else.',
    'I find it difficult to say no when I see something practical which can be done to help.',
    'I would rather train others to do various tasks than to do everything myself.',
    'I like to speak kind, comforting, reassuring words to others and I am hurt when I hear others speak harshly.',
    'I enjoy communicating biblical truths to others and seeing long-range growth in the knownledge of the Christian faith.',
    'I have a desire to share with others messages I believe are from God which can correct, encourage, and comfort them.',
    'I enjoy making my home available for entertaining overnight guests who are involved in God"s work',
    'I enjoy meeting regularly over a period of time with individuals to help them grow spiritually',
    'I enjoy serving the needs of others in order to free them for more important work for the Lord.',
    'I have the ability to organise people, resources, plans and timetables in order to accomplish the Lord"s work efficiently.',
    'When others are hurting or in pain, I can feel for them, even to the point of becoming emotionally involved.',
    'I have the ability to explain difficult issues, after giving them much thought and study.',
    'I am able to communicate my thoughts directly and frankly to close friends, even though they may disagree with me',
    'I think it is sinful if a person fails to manage their financial assets well.',
    'I enjoy teaching ad sharing with others when I can apply the Bible to daily life.',
    'I enjoy doing routine tasks to help others, even though the tasks seem menial',
    'I feel comfortable delegating responsibilities to others and directing a plan through to completion.',
    'I am primarily attracted to people who express tenderness and kindness.',
    'I enjoy researching answers to difficult questions',
    'When I fail to live up to the standards of Christian living which I feel are important, I become very discouraged with myself.',
    'I really enjoy giving money and other material resources to Christian causes.',
    'When sharing Christian truth, I enjoy illustrating it with personal examples to make it more practical.',
    'I need reassurance that what I do to help other people is appreciated.',
    'I am able with discipline to work under pressure and acomplish things, as long as I know my goals and objectives',
    'I feel deep compassion and understanding for those with spiritual and emotional needs.',
    'The meaning of words and how people use them is important to me.',
    'I speak up about what I believe is right and wrong regardless of whether others agree or not.',
    'I recieve joy in encouraging others to be more generous in their giving.',
    'I enjoy sharing practical teaching of scripture as it relates to the personal and emotional problems of people.',
    'When I provide things for others, I would rather give them something I made myself than something I bought.',
    'In a leadership position, I feel more joy than frustation ot burden',
    'I like to be involved in alleviating the sufferings of others.',
    'When I hear a message I like, I check out the facts and details if I am uncertain rather than accept the speaker"s words without questions.',
    'When I sense the problems and needs of the world, I am burdened to spend long periods of time in intercessory prayer.',
    'When I give money or other tangile help to others, I like to do it anonymously.',
    'I like to simplify complex issues into practical steps to help people grow spiritually.',
    'I am a now person and when I see a need, I want to meet it right away rather than wait for a more convenient time.',
    'I enjoy being responsible for the success of the group of which I am a part.',
    'I avoid leadership positions where I will have to carry out decisions which may hurt the feelings of some people.',
    'I enjoy devoting great amounts of time to studying the Bible to learn new truth.',
    'When I share God"s truth with others, I need to see that this brings about the change that God desires in them.',
    'I enjoy living at a lower standard of living than necessary in order to have more to give to the Lord"s work.',
    'I like to share with others the confidence that in spite of outward circumstances, trial, and setbacks, God always keeps his promises.',
    'When I hear of some practical need that someone has, I am willing to volunteer to help meet it.',
    'I am willing to endure the misunderstanding of others to achieve the end result.'
];

let questionsScores = [];
let questionIndex = 0;

function displayNextQuestion(){
    if (questionsScores.length < questions.length){
        document.querySelector('#question-num').innerHTML = 'Question ' + (questionIndex + 1)
        document.querySelector('#question').innerHTML = questions[questionIndex]
        questionIndex++;
    } else {
        displayResults()
    };
};

function getScores(){
    const btns = document.querySelectorAll('button')
    for (const btn in btns){
        let button = btns[btn]
        button.addEventListener('click', () => {
            if (questionsScores.length < questions.length){
                let score = parseInt(btns[btn].getAttribute('score'))
                questionsScores.push(score)
                displayNextQuestion()
            }
        })
    };
};

function getTotals(num){
    let total = 0
    for (let x = num; x < questionsScores.length; x += 7){
        total += questionsScores[x]
    }   
    return ((total/50) * 100).toFixed(0);
};

function displayResults(){
    document.querySelector('#results-title').innerHTML = 'Your results based from your scores:';
    document.querySelector('.questions').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
    const results = document.querySelectorAll('.score');
    for (let res in results){
        res = parseInt(res)
        let result = results[res]
        result.innerHTML = result.getAttribute('class').toString() + ' | ' + getTotals(res) + ' %';
    };
};

window.addEventListener('DOMContentLoaded', displayNextQuestion);
window.addEventListener('DOMContentLoaded', getScores);
