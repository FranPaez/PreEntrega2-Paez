const prodMainPage = [
    { id: 5, name: "RTX 3060 ti 8GB GDDR6", price: "281.800", 
        img: "./images/main/3060ti.png", alt: "placa de video rtx 3060ti"},
    { id: 6, name: "RTX 3090ti 24GB GDDR6", price: "522.100", 
        img: "./images/main/3090ti.png", alt: "placa de video rtx 3090ti"},
    { id: 3, name: "Intel Core i7 12700K", price: "337.400", 
        img: "./images/main/i7.png", alt: "procesador i7 de doceava generacion"},
    { id: 7, name: "RX 6900XT 16GB GDDR6", price: "432.600", 
        img: "./images/main/rx 6900xt.png", alt: "placa de video rx 6900xt"},
    { id: 4, name: "Ryzen 7 5800x 4.7GHz", price: "252.600", 
        img: "./images/main/ryzen.png", alt: "procesador ryzen 7 de quinta generacion"},
    { id: 17, name: "HyperX Cloud Core II", price: "69.800", 
        img: "./images/perifericos/auricular-hyperx.png", alt: "Auriculares HyperX"},
    { id: 13, name: "Mouse Razer Deathadder", price: "23.000", 
        img: "./images/perifericos/mouse-razer.png", alt: "Mouse razer deathadder"},
    { id: 15, name: "Teclado HyperX Alloy FPS", price: "50.000", 
        img: "./images/perifericos/teclado-hyperx.png", alt: "Teclado hyperx alloy fps"},
]

const asideMain = [
    {img: "./images/aside/amd.png", alt: "Amd marca asociada"},
    {img: "./images/aside/hyperx.png", alt: "HyperX marca asociada"},
    {img: "./images/aside/Intel.png", alt: "Intel marca asociada"},
    {img: "./images/aside/msi.png", alt: "MSI marca asociada"},
    {img: "./images/aside/nvidia.png", alt: "Nvidia marca asociada"},
    {img: "./images/aside/zotac.png", alt: "Zotak marca asociada"},
]

const prodCompoPage = [
    { id: 1, name: "Motherboard MSI Pro B660m", price: "92.000", 
        img: "../images/componentes/mother.png", alt: "Motherboard MSI Pro B660m", category: "motherboard", brand: "msi"},
    { id: 2, name: "Motherboard Asus Tuf B450m", price: "73.000", 
        img: "../images/componentes/mother-ryzen.png", alt: "Motherboard Asus Tuf B450m", category: "motherboard", brand: "asus"},
    { id: 3, name: "Intel Core i7 12700K 12th gen", price: "337.400", 
        img: "../images/componentes/i7.png", alt: "intel core i7 12700K 5.00GHz", category: "procesador", brand: "intel"},
    { id: 4, name: "Ryzen 7 5800x 4.7GHz", price: "252.600", 
        img: "../images/componentes/ryzen.png", alt: "Ryzen 7 5800x 4.7GHz", category: "procesador", brand: "ryzen"},
    { id: 5, name: "RTX 3060ti 8GB", price: "281.800", 
        img: "../images/componentes/3060ti.png", alt: "RTX 3060ti 8GB GDDR6", category: "videocard", brand: "nvidia"},
    { id: 6, name: "RTX 3090ti 24GB", price: "522.100", 
        img: "../images/componentes/3090ti.png", alt: "RTX 3090ti 24GB GDDR6", category: "videocard", brand: "nvidia"},
    { id: 7, name: "RX 6900XT 16GB", price: "281.800", 
        img: "../images/componentes/rx 6900xt.png", alt: "RX 6900XT 16GB GDDR6", category: "videocard", brand: "radeon"},
    { id: 8, name: "RAM FuryBeast 1x16GB", price: "27.000", 
        img: "../images/componentes/ram-hyperx.png", alt: "RAM Futy Beast DDR4 1x16GB", category: "ram", brand: "hyperx"},
    { id: 8, name: "RAM Corsair 1x16GB", price: "34.500", 
        img: "../images/componentes/ram-corsair.png", alt: "RAM Corsair Vengance Led 1x16GB", category: "ram", brand: "corsair"},
    { id: 9, name: "Cooler Master Air MA610P", price: "84.000", 
        img: "../images/componentes/cooler.png", alt: "Disco SSD Kingston", category: "refrigeracion", brand: "coolermaster"},
    { id: 10, name: "Disco SSD Kingston 540GB", price: "12.000" , category: "disco", brand: "hyperx", 
        img: "../images/componentes/ssd.png", alt: "Disco Sólido SSD Kingston 540GB A400 500MB/s"},
    { id: 11, name: "Gabinete Deepcool Color Black", price: "47.000", 
        img: "../images/componentes/gabinete.png", alt: "Gabinete Deepcool MACUBE310P Black" , category: "gabinete", brand: "deepcool"},
]

const prodPerPage = [

    {id: 12, name:"Mouse Hyperx Pulsefire FPS", price: "27.700",
        img: "../images/perifericos/mouse-hyperx.png", alt:"Mouse Hyperx Pulsefire", category: "mouse", brand: "hyperx"},
    {id: 13, name:"Mouse Razer Deathadder", price: "23.000",
    img:"../images/perifericos/mouse-razer-deathadder.png", alt:"Mouse Razer Deathadder", category: "mouse", brand: "razer"},
    {id: 14, name:"Mouse Razer Viper Mini Ultralight", price: "63.000",
    img: "../images/perifericos/mouse-razer.png", alt:"Mouse Razer Viper Mini", category:"mouse", brand: "razer"},
    {id: 15, name:"Teclado Hyperx Alloy FPS RGB", price: "50.000",
    img:"../images/perifericos/teclado-hyperx.png", alt:"Teclado Hyperx Alloy FPS", category: "teclado", brand: "hyperx"},
    {id: 16, name:"Teclado Razer Blackwidow", price: "80.000",
    img:"../images/perifericos/teclado-razer.png", alt:"Teclado Razer Blackwidow", category: "teclado", brand: "razer"},
    {id: 17, name:"Auriculares Hyperx Cloud Core II", price: "69.800",
    img:"../images/perifericos/auricular-hyperx.png", alt:"Auriculares Hyperx Cloud Core II", category: "auriculares", brand: "hyperx"},
    {id: 18, name:"Auriculares Hyperx Alpha", price: "65.500",
    img:"../images/perifericos/auriculares-hyperx-alpha.png", alt:"Auriculares Hyperx Alpha", category: "auriculares", brand: "hyperx"},
    {id: 19, name:"Auriculares Kraken V2", price: "58.500",
    img:"../images/perifericos/auricular-razer.png", alt:"Auriculares Razer Kraken V2", category: "auriculares", brand: "razer"},
    {id: 20, name:"Mousepad HX Fury", price: "40.200",
    img:"../images/perifericos/mousepad-hyperx.png", alt:"Mousepad hyperx Fury XXL", category: "mousepad", brand: "hyperx"},
    {id: 21, name:"Mousepad SteelSerie QCK", price: "35.800",
    img:"../images/perifericos/mousepad-steelseries.png", alt:"Mousepad Steelseries QC1 XXL", category: "mousepad", brand: "steelseries"},
    {id: 22, name:"Microfono Hyperx Quadcast", price: "90.800",
    img:"../images/perifericos/mic-hyperx.png", alt:"Microfono Hyperx Quadcast", category: "accesorio" , brand: "hyperx"},
    {id: 23, name:"Microfono Razer Seiren V.2", price: "34.400",
    img:"../images/perifericos/mic-razer-seiren.png", alt:"Microfono Razer Seiren", category: "accesorio", brand: "razer"},
]

const asideOutMain = [
    {img: "../images/aside/amd.png", alt: "Amd marca asociada"},
    {img: "../images/aside/hyperx.png", alt: "HyperX marca asociada"},
    {img: "../images/aside/Intel.png", alt: "Intel marca asociada"},
    {img: "../images/aside/msi.png", alt: "MSI marca asociada"},
    {img: "../images/aside/nvidia.png", alt: "Nvidia marca asociada"},
    {img: "../images/aside/zotac.png", alt: "Zotak marca asociada"},
]