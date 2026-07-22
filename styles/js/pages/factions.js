/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(null, charadex.page.events, null, 
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
    if (!isNaN(progressValue)) {
            const progressBar = document.getElementById("Progress");
            progressBar.value = progressValue;
    }
  });
  charadex.tools.loadPage('.softload', 500);
});
