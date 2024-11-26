interface DialogVariant {
    label: string;
    nextDialog: string;
}

interface DialogData {
    description: string;
    variants: DialogVariant[];
}

interface Dialogs {
    [key: string]: DialogData;
}

const dialogs: Dialogs = {
    "1": {
        description: "Hello World",
        variants: [
            { label: "Вариант 1", nextDialog: "2" },
            { label: "Вариант 2", nextDialog: "2" }
        ]
    },

    "2": {
        description: "Ого, сработало!",
        variants: [
            {label: "Круто", nextDialog: "1"},
            {label: "Ладно", nextDialog: "3"}
        ]
    },
    "3": {
        description: "Прохладно",
        variants: [
            {label: "Ладно", nextDialog: "1"},
            {label: "Ладно", nextDialog: "1"}
        ]
    }
};

export default dialogs