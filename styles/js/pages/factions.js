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
async function updateProgress() {
  const url = 'https://docs.google.com/spreadsheets/d/1vep4kZFHW8Ldbc5x1eqbRIoidhkOrzGAubPNcMpEbE4';
  const response = await fetch(url);
  const data = await response.text();
  
  // Parse your specific row/column value from the CSV text output
  const rows = data.split('\n');
  const currentValue = parseFloat(columns[9]); // adjust index based on cell position
  
  // Update the div width
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = currentValue + '%';
}

updateProgress();
  });
  charadex.tools.loadPage('.softload', 500);
});
