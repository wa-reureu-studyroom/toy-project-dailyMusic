import React, { useState, useEffect } from 'react'

const quotes = [
    {
    quote: "당신이 어떤 생각을 하느냐에 따라 인생이 결정된다.",
    author: "마크 트웨인",
},
{
    quote: "인생은 길이가 아닌 깊이로 측정됩니다.",
    author: "벤스 하브너",
},
{
    quote:"자신의 능력을 믿으며 최선을 다하면 불가능한 일도 가능해진다.",
    author:"로저 스타우바흐, 야구선수",
},
{
    quote: "네 스스로 등불이 되어라 바깥에서 은신처를 찾지 말고 자신 안의 빛에 더 가까이 다가가라.",
    author: "붓다",
},
{
    quote: "어제를 후회하지 마라 내일은 미지의 땅이고 오늘의 행동이 내일을 만든다.",
    author: "앤드류 카네기, 사업가",
},
{
    quote: "행복은 얼마나 많이 가졌느냐가 아니라 얼마나 많이 즐겼냐에 달렸다.",
    author:"찰스 H. 스펄전, 철학자 및 신학자",
},
{
    quote: "미래를 신뢰하지 마라 죽은 과거는 묻어 버려라 그리고 살아있는 현재 행동하라.",
    author: "헨리 워즈워스 롱펠로",
},
{
    quote : "모든 가능성이 당신 안에 잠들어 있다 당신은 그 가능성을 깨닫고 존중하기 위해 이곳에 있다.",
    quthor: "존 오도너휴",
},
{
    quote: "매일 아침 새로운 시작이다.",
    author: "에크하르트 톨레, 작가",
},
{
    quote: "생각은 쉽고 행동하는 것은 어렵다 세상에서 가장 어려운 것은 그 생각을 행동으로 옮기는 것이다.",
    author: "요한 볼프강 폰 괴테",
},
]

function Quotes() {
const [quote, setQuote] = useState("");

useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);
}, []);

useEffect(() => {
    const interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);
    }, [10000]); // 10초마다 명언 변경

    return () => {
    clearInterval(interval);
    };
}, []);

return (
    <div>
        <span>{quote.quote}</span>
    </div>
);
}

export default Quotes;