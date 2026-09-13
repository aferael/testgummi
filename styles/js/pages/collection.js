/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  let dex = await charadex.initialize.page(
    null,
    charadex.page.collection,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        let profile = listData.profileArray[0];

        // Inventory
        charadex.initialize.groupGallery(
          charadex.page.collection.collectionConfig,
          await charadex.manageData.collectionFix(profile),
          'type',
          charadex.url.getPageUrl('badges')
        )

      }
    }
  );
});
