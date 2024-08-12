let home_score = document.getElementById("home-score")
home_score_count = parseInt(home_score.textContent)
let guest_score = document.getElementById("guest-score")
guest_score_count = parseInt(guest_score.textContent)

function addHome1() {
    home_score_count += 1
    home_score.textContent = home_score_count
}
function addGuest1() {
    guest_score_count += 1
    guest_score.textContent = guest_score_count
}
function addHome2() {
    home_score_count += 2
    home_score.textContent = home_score_count
}
function addGuest2() {
    guest_score_count += 2
    guest_score.textContent = guest_score_count
}
function addHome3() {
    home_score_count += 3
    home_score.textContent = home_score_count
}
function addGuest3() {
    guest_score_count += 3
    guest_score.textContent = guest_score_count
}