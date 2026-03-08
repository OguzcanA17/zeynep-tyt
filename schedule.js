const schedule={}

for(let i=1;i<=30;i++){

let lessons=[

{
ders:"Türkçe",
konu:"Paragraf Çalışması",
video:"https://www.youtube.com/results?search_query=tyt+paragraf"
},

{
ders:"Matematik",
konu:"Temel Matematik Problemleri",
video:"https://www.youtube.com/results?search_query=tyt+problemler"
}

]

if(i%3==0){

lessons.push({
ders:"Biyoloji",
konu:"Hücre",
video:"https://www.youtube.com/results?search_query=tyt+hücre"
})

}

if(i%4==0){

lessons.push({
ders:"Fizik",
konu:"Kuvvet ve Hareket",
video:"https://www.youtube.com/results?search_query=tyt+kuvvet"
})

}

if(i%5==0){

lessons.push({
ders:"Kimya",
konu:"Atom",
video:"https://www.youtube.com/results?search_query=tyt+atom"
})

}

schedule[i]={lessons}

}