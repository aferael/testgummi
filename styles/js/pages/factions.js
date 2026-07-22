/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(null, charadex.page.factions, null, 
  (listData) => {
    let backgroundElement = $('.cd-prompt-background');
    if (listData.type == 'profile') {
      backgroundElement.attr('style', `background-image: url(${listData.profileArray[0].image})`);
    } else {
      backgroundElement.each(function(i) {
        const image = listData.array[i]?.image;
        $(this).attr('style', `background-image: url(${image})`);
      });
    }
async function updateProgressBar() {
    try {
        const response = await charadex.initialize.page;
        const progressValue = parseFloat('Progress');

        if (!isNaN(progressValue)) {
            // Update the HTML progress bar element
            const progressBar = document.getElementById("sheet-progress");
            progressBar.value = progressValue;
            
            // Update optional text element
            document.getElementById("progress-text").innerText = progressValue + "%";
        }
    } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
    }
}
  });
  charadex.tools.loadPage('.softload', 500);
});
