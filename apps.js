var state = {
    items: []
};

var htmlAdd = (
    '<li>' +
    '<span class="shopping-item js-shopping-item"></span>' +
    '<div class="shopping-item-controls js-shopping-item-conrols">' +
    '<button class="shopping-item-toggle">' +
    '<span class="button-label">check</span>' +
    '</button>' +
    '<button class="shopping-item-delete">' +
    '<span class="button-label">delete</span>' +
    '</button>' +
    '</div>' +
    '</li>'
);

var addItem = function (state, item) {
    state.items.push({
        displayName: item,
        checkedOff: false
    });
};


var renderList = function (state, element) {
        var itemsHTML = state.items.map(function (item, index) {
                return (;
                }); element.html(itemsHTML);
        };

        $('.js-shopping-list-form').submit(function (event) {
            event.preventDefault();
            addItem(state, $('.shopping-list-entry').val());
            renderList(state, $('.shopping-list'));
        });

        $('.')



//this is where the data will be held
var state = {
    items: []
};

// this is the the html that will be added when adding an new item to the list
var listItemTemplate = (
    '<li>' +
    '<span class="shopping-item js-shopping-item"></span>' +
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

// state management
// this function is adding an item from the state data and what ever the item is
function addItem(state, item) {
    //push adds an item to the state
    state.items.push({
        displayName: item,
        //adds the item in an unchecked state
        checkedOff: false
    });
}
//returns list of items in the itemindex
function getItem(state, itemIndex) {
    return state.items[itemIndex];
}
//the function called when deleting an item from the itemindex
function deleteItem(state, itemIndex) {
    state.items.splice(itemIndex, 1);
}
//the function called when adding items to the itemindex
function updateItem(state, itemIndex, newItemState) {
    state.items[itemIndex] = newItemState;
}

// DOM manipulation
//the function for modifying whats in the state
function renderItem(item, itemId, itemTemplate, itemDataAttr) {
    //creating a variable for what the function is adding, in this case the template we made at the top.
    var element = $(itemTemplate);
    //searching for the place to add the text that was entered by the user
    element.find('.js-shopping-item').text(item.displayName);
    //if the item was checked off it adds the class shoppin-item-checked to check the item
    if (item.checkedOff) {
        element.find('.js-shopping-item').addClass('shopping-item__checked');
    }
    element.find('.js-shopping-item-toggle')
    element.attr(itemDataAttr, itemId);
    return element;
}
//function for adding the data in the state to the html
function renderList(state, listElement, itemDataAttr) {
    var itemsHTML = state.items.map(
        function (item, index) {
            return renderItem(item, index, listItemTemplate, itemDataAttr);
        });
    //call to replace old content with new content
    listElement.html(itemsHTML);
}


// Event listeners

function handleItemAdds(
    formElement, newItemIdentifier, itemDataAttr, listElement, state) {
    // when submiting new item triggers list and form element to go off
}

function handleItemDeletes(
    formElement, removeIdentifier, itemDataAttr, listElement, state) {
    // when clicking on the delete button removes the closest 'li' after reading about parseInt still unsure what it does.
    listElement.on('click', removeIdentifier, function (event) {
        var itemIndex = parseInt($(this).closest('li').attr(itemDataAttr));
        deleteItem(state, itemIndex);
        renderList(state, listElement, itemDataAttr);
    });
}


function handleItemToggles(
    listElement, toggleIdentifier, itemDataAttr, state) {
    // when clicking on the checked button replaces old item to either the checked on or checked off state
    listElement.on('click', toggleIdentifier, function (event) {
        var itemId = $(event.currentTarget.closest('li')).attr(itemDataAttr);
        var oldItem = getItem(state, itemId);

        updateItem(state, itemId, {
            displayName: oldItem.displayName,
            checkedOff: !oldItem.checkedOff
        });
        renderList(state, listElement, itemDataAttr)
    });
}


$(function () {
    $('#js-shopping-list-form').submit(function (event) {
        // stops the original
        event.preventDefault();
        var newItem = formElement.find(newItemIdentifier).val();
        console.log(newItem);
        addItem(state, newItem);
        renderList(state, listElement, itemDataAttr);
        // reset form
        this.reset();
    });
    var formElement = $('#js-shopping-list-form');
    var listElement = $('.js-shopping-list');

    // from index.html -- it's the id of the input
    // containing shopping list items
    var newItemIdentifier = '#js-new-item';

    // from `listItemTemplate` at top of this file. for each
    // displayed shopping list item, we'll be adding a button
    // that has this class name on it
    var removeIdentifier = '.js-shopping-item-delete';

    // we'll use this attribute to store the id of the list item
    var itemDataAttr = 'data-list-item-id';

    //
    var toggleIdentifier = '.js-shopping-item-toggle'
    handleItemAdds(
        formElement, newItemIdentifier, itemDataAttr, listElement, state);
    handleItemDeletes(
        formElement, removeIdentifier, itemDataAttr, listElement, state);
    handleItemToggles(listElement, toggleIdentifier, itemDataAttr, state);
});
