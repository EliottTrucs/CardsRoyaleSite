function filterCards(category) 
{
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.toolbar button');

    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="filterCards('${category}')"]`).classList.add('active');

    cards.forEach(card => 
    {
        if (category === 'all' || card.classList.contains(category)) 
        {
            card.style.visibility = 'visible';
            card.style.opacity = '1';
            card.style.position = 'relative';
        } 
        else 
        {
            card.style.visibility = 'hidden';
            card.style.opacity = '0';
            card.style.position = 'absolute';
        }
    });
}


