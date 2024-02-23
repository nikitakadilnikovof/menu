const menu = {
    mainDishes: [
        {
            img: "1",
            name: { ru: "Говяжьи ребрышки", tr: "Dana Kaburga" },
            description: {
                ru: "Говяжьи ребрышки, приготовленные в специальном барбекю на яблоневом дереве, коптятся на медленном огне 10-12...",
                tr: "Özel BBQ’de, elma odunuyla, 10-12 saate kadar ağır ateşte tütsülenerek pişirilmiş dana kaburga, baharatlı baby patates..."
            },
            price: "260 TL",
            time: { ru: "20 МИН", tr: "20 DK" }
        },
        {
            img: "2",
            name: { ru: "Восхитительная вырезка", tr: "Bonfile Lokum" },
            description: {
                ru: "Вырезка на гриле, соте из картофеля, брокколи, цветная капуста, пармезан и руккола",
                tr: "Izgara lokum bonfile, Patates sote, Brokoli, karnabahar, Parmesan ve Roka ile"
            },
            price: "220 TL",
            time: { ru: "15 МИН", tr: "15 DK" }
        },
        {
            img: "3",
            name: { ru: "Робеспьер", tr: "Robespierre" },
            description: {
                ru: "Запеченная говяжья вырезка с шалфеем, розмарином, картофельным соте, пармезаном и рукколой",
                tr: "Fırında yaprak dana bonfile, adaçayı, biberiye, patates sote, parmesan ve roka ile"
            },
            price: "200 TL",
            time: { ru: "15 МИН", tr:"15 DK" }
        },
        {
            img: "4",
            name: { ru: "Лосось на гриле", tr:"Izgara Somon" },
            description: {
                ru: "Норвежский лосось, приготовленный на гриле, с овощным гарниром, сыром пармезан и рукколой",
                tr: "Izgara Norveç somonu, Sebze garnitür ve Parmesan peynirli ve Roka ile"
            },
            price: "320 TL",
            time: { ru: "15 МИН", tr: "15 DK" }
        },
        {
            img: "5",
            name: { ru: "Мясная кесадилья", tr:"Etli Quesadilla" },
            description: {
                ru: "Обжаренные кусочки говядины, мексиканская фасоль, цветной перец, моцарелла, горчица, острый соус, томатная сальса...",
                tr:"Tortilla içinde sote dana et parçaları, Meksika fasulyesi, renkli biberler, mozzarella, hardal, acı sos, yanında domates salsa sos..."
            },
            price: "260 TL",
            time: { ru: "20 МИН", tr: "20 DK" }
        },
    ]
}

const lang = document.querySelector("html").getAttribute("lang");
console.log(lang);


const mainDishesList = document.querySelector("#mainDishes");
for (let i = 0; i < menu.mainDishes.length; i++) {
    const cartInfo = menu.mainDishes[i];
    let cartDiv = document.createElement("div");
    cartDiv.className = "menu-cart";


    cartDiv.innerHTML = `
    <img src="./img/menu/mainDishes/${cartInfo.img}.png" alt="">
    <div class="menu-cart__info">
        <div>
            <h3>${cartInfo.name[lang]}</h3>
            <p>${cartInfo.description[lang]}</p>
        </div>
        <div class="menu-cart__details">
            <div>
                <span> <i class="fa-solid fa-hand-holding-dollar"></i> ${cartInfo.price}</span>
                <span> <i class="fa-solid fa-clock"></i> ${cartInfo.time[lang]}</span>
            </div>
            <button>Выбрать</button>
        </div>
    </div>
    `

    mainDishesList.appendChild(cartDiv);

}