var portrait = document.querySelector('portrait');
var leftportrait = document.querySelector('left');
var descript = document.querySelector('description');
var description1 = document.getElementById('D1');
var name1 = document.getElementById('N1');
var portrait1 = document.getElementById('p1');
var portrait2 = document.getElementById('p2');
var portrait3 = document.getElementById('p3');
var character1 = document.getElementById('I1');
var character2 = document.getElementById('I2');
var character3 = document.getElementById('I3');
var charborder1 = document.getElementById('I4');
var charborder2 = document.getElementById('I5');
var charborder3 = document.getElementById('I6');
var background = document.getElementById('I7');
var background1 = document.getElementById('I8');
var background2 = document.getElementById('I9');

portrait1.onclick = function changeState() {
    background.style.opacity = 1;
    background1.style.opacity = 0;
    background2.style.opacity = 0;
    character1.style.opacity = 1;
    character2.style.opacity = 0;
    character3.style.opacity = 0;
    charborder1.style.opacity = 1;
    charborder2.style.opacity = 0;
    charborder3.style.opacity = 0;
    description1.style.opacity= 1;
    name1.style.opacity = 1;
    document.getElementById("N1").innerHTML = "TUTTLE";
    document.getElementById("D1").innerHTML = "Tuttle grew up studying all the ancient glyphs taking their newfound knowledge and bringing it on this new adventure. Tuttle is a ranged mage who has a defensive shield to protect the party.";

}
portrait2.onclick = function changeState() {
    background.style.opacity = 0;
    background1.style.opacity = 1;
    background2.style.opacity = 0;
    character1.style.opacity = 0;
    character2.style.opacity = 1;
    character3.style.opacity = 0;
    charborder1.style.opacity = 0;
    charborder2.style.opacity = 1;
    charborder3.style.opacity = 0;
    description1.style.opacity= 1;
    name1.style.opacity = 1;
    name1.style.transform = "2s";
    document.getElementById("N1").innerHTML = "HAX";
    document.getElementById("D1").innerHTML = "Growing up in the hardened marshlands never phased Hax. After a run-in with the law, his life has never been the same. Hax wields a tri-blade stance, providing added damage to the party.";

}
portrait3.onclick = function changeState() {
    background.style.opacity = 0;
    background1.style.opacity = 0;
    background2.style.opacity = 1;
    character1.style.opacity = 0;
    character2.style.opacity = 0;
    character3.style.opacity = 1;
    charborder1.style.opacity = 0;
    charborder2.style.opacity = 0;
    charborder3.style.opacity = 1;
    description1.style.opacity= 1;
    name1.style.opacity = 1;
    document.getElementById("N1").innerHTML = "CANTU";
    document.getElementById("D1").innerHTML = "Cantu can't can't...wait to finish up his training at the darkest divination school in all of the land. Following in their flocks footsteps. Cantu wields a dark staff that buffs/debuffs party members and enemies.";
}
