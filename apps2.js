var state = {
    items: [
        {
            name: "apples",
            checked: false
            },
        {
            name: "oranges",
            checked: false
            },
        {
            name: "milk",
            checked: false
            },
        {
            name: "bread",
            checked: true
            }
        ]
}

function addItem(state, itemObj) {
    state.items.push(itemObj);
}

function removeItem(state, itemName) {
    var itemsArray = state.items;
    var index;
    for (var i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].name === itemName) {
            index = i;
        }
    }
    itemsArray.splice(index, 1);
}

function checkItem(state, itemName) {
    var itemsArray = state.items;
    for (var i = 0; i < state.items.length; i++) {
        if (state.items[i].name === itemName) {
            state.items[i].checked = true;
        }
    }
}

function renderList(state, JQueryElement) {
    var renderedHTML = state.items.map(function (item) {
        console.log(item);

        var row = '';
        row += '<li>';
        if (item.checked == false) {
            row += '<span class="shopping-item">' + item.name + '</span>';
        } else {
            row += '<span class="shopping-item shopping-item__checked">' + item.name + '</span>';
        }
        row += '<div class="shopping-item-controls">';
        row += '<button class="shopping-item-toggle">';
        row += '<span class="button-label">check</span>';
        row += '</button>';
        row += '<button class="shopping-item-delete">';
        row += '<span class="button-label">delete</span>';
        row += '</button>';
        row += '</div>';
        row += '</li>';

        return row;
    });
    JQueryElement.html(renderedHTML);
}

$(document).ready(function () {

    renderList(state, $('.shopping-list'));
    $('#js-shopping-list-form').on('submit keypress', function (event) {
        if (event.type === 'keypress' && event.which === 13 || event.type === 'submit') {
            event.preventDefault();
            var itemName = $('#shopping-list-entry').val();
            var shoppingItem = {
                name: itemName,
                checked: false
            }
            if (itemName) {
                addItem(state, shoppingItem);
                renderList(state, $('.shopping-list'));
            }
        }
    });
});

$('ul').on('click', 'button.shopping-item-toggle', function (event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    checkItem(state, itemName);
});

$('ul').on('click', 'button.shopping-item-delete', function (event) {
    var itemName = $(this).closest('li').find('.shopping-item').text();
    removeItem(state, itemName);
    renderList(state, $('.shopping-list'));
});
