
let currentPart = 0;
const chaptersParts = [
    [],   //מסך פתיחה
    ['ruller-container', 'introdaction-container'],        //מבוא
    ['opening-screen1', 'part2_2'],        //פרק 1
];

    window.addEventListener("load", () => {
        if(sessionStorage.getItem("Page") === null){
            sessionStorage.setItem("Page", "0"); 
            document.getElementById('start-button').addEventListener("click",Nextpart)
        }

        else{
            Nextpart();
            document.getElementById('Back-button').addEventListener("click",LastPart);
            document.getElementById('Next-button').addEventListener("click",Nextpart);
        }  
    });
    const Nextpart = () => {
       if(currentPart > chaptersParts[sessionStorage.getItem("Page")].length || sessionStorage.getItem("Page") === "0"){
            sessionStorage.setItem("Page", Number(sessionStorage.getItem("Page"))+1); 
            window.location.href = `page${sessionStorage.getItem("Page")}.html`;
       }

        for (let i = 0; i < chaptersParts[sessionStorage.getItem("Page")].length; i++) {
            document.getElementById(chaptersParts[sessionStorage.getItem("Page")][i]).style.display=`none`;
        }

        if(currentPart + 1 <= chaptersParts[sessionStorage.getItem("Page")].length ){
            document.getElementById(chaptersParts[sessionStorage.getItem("Page")][currentPart]).style.display=`block`;
        }

        currentPart++;
        console.log(currentPart);

    }

    const LastPart = () => {
       
    }

    
    const LastPage = () => {
        sessionStorage.setItem("Page", Number(sessionStorage.getItem("Page"))-1); 
        window.location.href = `page${sessionStorage.getItem("Page")}.html`;
    }

  
