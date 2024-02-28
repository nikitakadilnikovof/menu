const menu = {
    mainDishes: [
        {
            img: "1",
            name: { ru: "Говяжьи ребрышки", tr: "Dana Kaburga", en: "Beef Ribs" },
            description: {
                ru: "Говяжьи ребрышки, приготовленные в специальном барбекю на яблоневом дереве, коптятся на медленном огне 10-12...",
                tr: "Özel BBQ’de, elma odunuyla, 10-12 saate kadar ağır ateşte tütsülenerek pişirilmiş dana kaburga, baharatlı baby patates...",
                en: "Beef ribs cooked in a special BBQ with apple wood, smoked over a slow fire for 10-12 hours, spicy baby potatoes..."
            },
            price: "260 TL",
            time: { ru: "20 МИН", tr: "20 DK", en: "20 MIN" }
        },
        {
            img: "2",
            name: { ru: "Восхитительная вырезка", tr: "Bonfile Lokum", en:"Tenderloin Delight" },
            description: {
                ru: "Вырезка на гриле, соте из картофеля, брокколи, цветная капуста, пармезан и руккола",
                tr: "Izgara lokum bonfile, Patates sote, Brokoli, karnabahar, Parmesan ve Roka ile",
                en:"Grilled tenderloin, sautéed potatoes, broccoli, cauliflower, Parmesan and arugula"
            },
            price: "220 TL",
            time: { ru: "15 МИН", tr: "15 DK", en: "15 MIN"}
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
    ],
    snacks: [
        {
            img: "1",
            name: { ru: "Сырная тарелка", tr: "Peynir Tabağı", en: "Cheese Platter" },
            description: {
                ru: "Импортные и местные сорта сыра, сушеные абрикосы, грецкие орехи, оливки и гризи",
                tr: "İthal ve yerli peynir çeşitleri,Kuru kayısı, Ceviz, Zeytin ve grisini",
                en: "Imported and local cheese varieties, dried apricots, walnuts, olives and grisi"
            },
            price: "80 TL",
            time: { ru: "2 МИН", tr: "20 DK", en: "20 MIN" }
        },
        {
            img: "2",
            name: { ru: "Начос с грудинкой", tr: "Füme Etli Nachos", en: "Smoked Meat Nachos" },
            description: {
                ru: "Копченая говяжья грудинка, перец халапеньо, мексиканская фасоль, сырный соус Моцарелла и Чеддер, красный и зеленый перец",
                tr: "Tütsülenmiş dana brisket, jalapeno biberi, Meksika fasulyesi, mozzarella ve cheddar peyniri sos, kırmızı-yeşil biber ile",
                en: "Smoked beef brisket, jalapeno peppers, Mexican beans, mozzarella and cheddar cheese sauce, red and green chili"
            },
            price: "180 TL",
            time: { ru: "15 МИН", tr: "20 DK", en: "20 MIN" }
        },
        {
            img: "3",
            name: { ru: "Начос с креветками", tr: "Karidesli Nachos Lokmaları", en: "Shrimp Nachos Bites" },
            description: {
                ru: "Чипсы начос с паштетом из свежего авокадо и жареными креветками, томатный соус сальса",
                tr: "Nachos cipslerinde taze avokado ezme ve tava karides, salsa domates sos ile",
                en: "Nachos chips with fresh avocado pate and pan-fried shrimp, salsa tomato sauce"
            },
            price: "120 TL",
            time: { ru: "5 МИН", tr: "5 DK", en: "5 MIN" }
        },
        {
            img: "4",
            name: { ru: "Тартин из сардин", tr: "Sardalya Tartine", en: "Sardine Tartine" },
            description: {
                ru: "Сардина с трюфельным майонезом, ракула, соленые огурцы, цветы каперсов, маринованная свекла на поджаренном деревенском хлебе",
                tr: "Kızarmış ekşi maya köy ekmeğinde trüf mantarlı mayonezli sardalya, rakula, turşu, kapari çiçeği, pancar turşusu ile",
                en: "Sardine with truffle mayonnaise, rakula, pickles, caper flower, pickled beetroot on toasted sourdough village bread"
            },
            price: "70 TL",
            time: { ru: "5 МИН", tr: "5 DK", en: "5 MIN" }
        },
        {
            img: "5",
            name: { ru: "Мексиканские начос", tr: "Meksika Nachos", en: "Mexican Nachos" },
            description: {
                ru: "Сальса из авокадо, сметана, мексиканская фасоль, перец халапеньо, соус из сыра моцарелла и чеддер, красный и зеленый перец",
                tr: "Avokado salsa, Ekşi krema, Meksika fasulyesi, jalapeno biberi, Mozzarella ve cheddar peyniri sos, kırmızı-yeşilbiber",
                en: "Avocado salsa, sour cream, Mexican beans, jalapeno pepper, mozzarella and cheddar cheese sauce, red-green pepper"
            },
            price: "220 TL",
            time: { ru: "5 МИН", tr: "5 DK", en: "5 MIN" }
        }
    ],
    drinks: [
        {
            img: "1",
            name: { ru: "Аффогато", tr: "Affogato", en: "Beef Ribs" },
            description: {
                ru: "С ванильным мороженым и эспрессо",
                tr: "Vanilyalı dondurma ve Espresso ile",
                en: "With vanilla ice cream and espresso"
            },
            price: "70 TL",
            time: { ru: "1 МИН", tr: "1 DK", en: "1 MIN" }
        }
    ]
}


const lang = document.querySelector("html").getAttribute("lang");


const menuListAll = document.querySelectorAll(".menu-list");

for (let i = 0; i < menuListAll.length; i++) {
    const menuListDiv = menuListAll[i] ;
    const menuListDivID = menuListDiv.getAttribute("id");
    console.log(menuListDivID);
    for (let i = 0; i < menu[menuListDivID].length; i++) {
        const cartInfo = menu[menuListDivID][i];
        let cartDiv = document.createElement("div");
        cartDiv.className = "menu-cart";
    
    
        cartDiv.innerHTML = `
        <img src="./img/menu/${menuListDivID}/${cartInfo.img}.png" alt="">
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
    
        menuListDiv.appendChild(cartDiv);
    
    }
}


const mainDishesList = document.querySelector("#mainDishes");
