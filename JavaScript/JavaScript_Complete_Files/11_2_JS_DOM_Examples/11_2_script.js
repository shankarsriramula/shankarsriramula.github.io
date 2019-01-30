let textAreaTag = document.querySelector('#text-area');
let charCount = 100;
let spanTag = document.querySelector('#span');
textAreaTag.setAttribute('maxlength',charCount);
textAreaTag.addEventListener('keyup',function() {
    let textEnteredLength = textAreaTag.value.length;

    let theCount = charCount - textEnteredLength;
    spanTag.textContent = theCount.toString();
});

// Dependent Select Box
let brandSelectTag = document.querySelector('#brand');
let modelSelectTag = document.querySelector('#model');
let colorSelectTag = document.querySelector('#color');

let brands = [
    {
        id : 1,
        name : 'Maruthi Suzuki'
    },
    {
        id : 2,
        name : 'Suzuki NEXA'
    },
    {
        id : 3,
        name : 'Hyundai Motors'
    }
];

let models = [
    {
        id:1,
        brand_id : 1,
        name : 'Swift'
    },
    {
        id:2,
        brand_id : 1,
        name : 'Dzire'
    },
    {
        id:3,
        brand_id : 1,
        name : 'Brezza'
    },
    {
        brand_id : 2,
        name : 'Baleno'
    },
    {
        id:4,
        brand_id : 2,
        name : 'Ignis'
    },
    {
        brand_id : 2,
        name : 'SCross'
    },
    {
        brand_id : 2,
        name : 'Ciaz'
    },
    {
        brand_id : 3,
        name : 'Hyndai i10'
    },
    {
        brand_id : 3,
        name : 'Hyndai Verna'
    },
    {
        brand_id : 3,
        name : 'Hyndai i20'
    },
    {
        brand_id : 3,
        name : 'Hyndai Creta'
    }
];

let colors = [
    {
        brand_id : 1,
        name : 'Black'
    },
    {
        brand_id : 1,
        name : 'Blue'
    },
    {
        brand_id : 1,
        name : 'Green'
    },
    {
        brand_id : 2,
        name : 'Gray'
    },
    {
        brand_id : 2,
        name : 'Purple'
    },
    {
        brand_id : 2,
        name : 'Silver'
    },
    {
        brand_id : 3,
        name : 'Black'
    },
    {
        brand_id : 3,
        name : 'Silver'
    },
    {
        brand_id : 3,
        name : 'Maroon'
    }
];

let optionsTag = '<option value="0">Select a Brand</option> \n';
brands.forEach((brand) => {
    optionsTag += `<option value="${brand.id}">${brand.name}</option> \n`;
});
brandSelectTag.innerHTML = optionsTag;

// Change Event for Brand Select Box
brandSelectTag.addEventListener('change',function() {
    let selectedBrandId = parseInt(brandSelectTag.value);
    let optionsTag = '';
    let selectedModels = models.filter((model) => {
        return model.brand_id === selectedBrandId;
    });
    selectedModels.forEach((selectedModel) => {
        optionsTag += `<option value="${selectedModel.id}">${selectedModel.name}</option>`;
    });
    modelSelectTag.innerHTML = optionsTag;
});

// Change Event for Model Select Box
modelSelectTag.addEventListener('change',function() {
    let selectedModelId = parseInt(modelSelectTag.value);
    let optionsTag = '';
    let selectedColors = colors.filter((color) => {
        return color.brand_id === selectedModelId;
    });
    selectedColors.forEach((selectedColor) => {
        optionsTag += `<option value="${selectedColor.id}">${selectedColor.name}</option>`;
    });
    colorSelectTag.innerHTML = optionsTag;
});



