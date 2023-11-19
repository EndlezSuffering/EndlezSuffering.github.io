document.addEventListener('DOMContentLoaded', (event) => {
    const characters = document.querySelectorAll('.character-option');
    const doneButton = document.getElementById('done-button');

    characters.forEach(character => {
        character.addEventListener('click', () => {
            characters.forEach(c => c.classList.remove('selected')); // Remove selection from others
            character.classList.add('selected'); // Mark this as selected
            doneButton.disabled = false; // Enable the done button
        });
    });

    doneButton.addEventListener('click', () => {
        if (document.querySelector('.character-option.selected')) {
            // Proceed to loading screen
            console.log('Character selected, proceed to loading screen');
            // In the future, this could navigate to a loading screen or initiate a connection to the server
            // window.location.href = '/loading-screen.html';
        }
    });
});
