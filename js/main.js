$('#scratchCard').wScratchPad({
    size        : 100,          // The size of the brush/scratch.
    bg          : './images/winning-card.jpg',  // Background (image path or hex color).
    fg          : './images/google-scratch-card.jpg',  // Foreground (image path or hex color).
    realtime    : true,       // Calculates percentage in realitime.
    scratchDown : null,       // Set scratchDown callback.
    scratchUp   : null,       // Set scratchUp callback.
    scratchMove : null,       // Set scratcMove callback.
    cursor      : 'pointer' // Set cursor.
  });