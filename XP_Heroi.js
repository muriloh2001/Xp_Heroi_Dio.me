
let herois = {
    Homem_Aranha: 500,
    Hulk: 1500,
    Capitao_America: 3500,
    Homem_de_Ferro: 6500,
    Gaviao_Arqueiro: 7500,
    Flash: 8500,
    Batmam: 9500,
    Coringa: 12000
};

for (let heroi in herois) {
    let xp = herois[heroi];
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1000 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 6001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${heroi} está no nível de ${nivel}\n`);
}
