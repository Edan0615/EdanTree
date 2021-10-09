$(document).ready(() => {
  $("#Pic").on("click", (e) => {
    let introHtml = `
      <div id='IntroOutside'>
      <div id='exitArea'>
      返回先前頁面
      </div>
      
        <div id='IntroInside'>
            <h1>簡介</h1>
            <p id='Words' >
             <h3>歡迎你來到我的個人小樹!</h3>
             <p>
                很高興在這裡與你相遇。兩條平行線本不會相交，但因為人生的轉捩使我們都轉變了方向。
                也許與交錯的平行線一樣，在這裡相遇後我們最終會分別，
                但我希望在這裡相處的每一分每一秒都能成為我們人生中最美好的回憶。
             </p>
             <p>
                在這個簡單的網頁中羅列了我的作品們，有些還在製作，有些已經開放使用。我希望在這寒冷的世界中，
                能夠盡自己的一份微薄心力散波歡樂散波愛。
             </p>
             <p>
                「人生的精華在於學」也許你會覺得很陳腔濫調，但這卻是實打實的事實。我們也許也都聽過「知識就是力量」
                但很不幸的在我們努力學習的過程中，除了辛苦與孤獨通常我們都無法體會到前者所述的那份足以改變人生的力量。
                <br><br>
                然而也正是因為如此，我希望陪伴大家在這條艱辛的道路上，一起體會那份改變人生的快樂。
                這也正是我一直以來所追尋的那份「光」。
             </p>
             <p>
              金錢在這個世代上或許是必要，但我卻沒有辦法單單純純的只為了其而奮鬥。也許是小時候讀體育班的特殊緣故，
              讓我從小就開始在思考人生的意義，而我也幸運地了解到對於我來說「分享、助人」就是我的這趟生命的意義。
              雖然想要生存與自我實現就必須要賺錢，但我還是希望賺錢是我在自我實現時的一個大Bouns而已。
             </p>
             <p>
                由於現實層面上不可能全部提供免費的資源，所以我會在我自己的理想與現實層面中想辦法做個平衡，
                盡可能的提供給大家優質負擔卻又不會太過沉重的課程。

             </p>
             <p>
             最後，感謝與歡迎你搭乘這輛夢想的列車，雖然我著實不知道目的地是在何處，但我希望作為列車長，每一個上車的乘客都能跟著
             我一起前進，直到到達屬於你自己的站所。

             <br><br>

             我改變了我的人生，現在換你了。
             <br><br>
             Edan Huang
             <br>
             2021.10.9
             </p>
            </p>
        </div>
      </div>
      `;
    $("section").after(introHtml);
    $("#IntroOutside").css({
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      height: "100%",
      width: "100%",
      position: "fixed",
      top: "0",
      left: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });
    $("#exitArea").css({
      position: "fixed",
      top: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "2%",
      backgroundColor: "none",
      transition: "0.6s",
    });

    $("#exitArea")
      .mouseover(() => {
        $("#exitArea").css({
          backgroundColor: "white",
        });
      })
      .mouseout(() => {
        $("#exitArea").css({
          backgroundColor: "rgba(255, 255, 255, 0)",
        });
      })
      .click(() => {
        $("#IntroOutside").fadeOut("slow");
        setTimeout(() => {
          $("#IntroOutside").remove();
        }, 300);
      });

    $("#IntroInside").css({
      height: "50%",
      width: "95%",
      backgroundColor: "white",
      border: "0.5px solid black",
      borderRadius: "5px",
      boxShadow: "2px 2px 2px black",
      overflow: "auto",
    });
    $("#Words").css({
      fontSize: "30px",
    });
    if (window.innerWidth < 800) {
      $("#IntroInside").css({
        width: "95%",
      });
    } else {
      $("#IntroInside").css({
        width: "50%",
      });
    }
  });
});
