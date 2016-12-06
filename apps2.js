var state = {
    items: []
}

function addItem(state, item) {
    state.items.push(item, {
        checkedOff: false
    });
}

function removeItem(state, item) {
    var itemArray = state.items;
    var index = {
        for (var i = 0; i < intemsArray.length; i++) {
            if (itemArray[i].name === item) {
                index = i;
            }
        }
    }
    itemArray.splice(index, 1);
}
function renderList(state, element) {
    var renderHTML = state.items.map(function (item) {
        return (
            '<li>' +
            '<span class="shopping-item js-shopping-item">' + item + '</span>' +
            '<div class="shopping-item-controls">' +
            '<button class="js-shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
            '</button>' +
            '<button class="js-shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
            '</button>' +
            '</div>' +
            '</li>'
        );
    })
    element.html(renderHTML);
    return renderList;
}

$(document).ready(function () {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        var item = $('#shopping-list-entry').val();
        addItem(state, item);
        renderList(state, $('.shopping-list'));
        this.reset();
    });

    $('<li>').click('button.shipping-item-toggle', function (event) {
        $(this).closest('<li>').find('.shopping-item').toggleClass('.shopping-item__checked');
    });
    $('<li>').click('buttion.shopping-item-delete', function (event) {
        var item = $(this).closest('<li>').find('.shopping-item').text();
        removeItem(state, item);
        renderList(state, $('.shopping-list'));
    });
});
