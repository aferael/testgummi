/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  let dex = await charadex.initialize.page(
    null,
    charadex.page.badgeCollection,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        let profile = listData.profileArray[0];

        // Inventory
        charadex.initialize.groupGallery(
          charadex.page.badgeCollection.badgeCollectionConfig,
          await charadex.manageData.badgeCollectionFix(profile),
          'type',
          charadex.url.getPageUrl('badges')
        )
        
      }
    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});
