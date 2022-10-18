const closeAd = document.getElementById('close-ad');
const adBanner = document.getElementById('ad-banner');

document.getElementById('close-ad').addEventListener('click', () => {
    adBanner.style.display = "none";
})