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
            {label: "Круто", nextDialog: "6"},
            {label: "Похер", nextDialog: "5"}
        ]
    },

    "5": {
        description: "Ты ахерел?",
        variants: [
            {label: "Да", nextDialog: "8"},
            {label: "Иди нахуй", nextDialog: "7"}
        ]
    },
    "6": {
        description: "В натуре",
        variants: [
            {label: "", nextDialog: "1"},
            {label: "", nextDialog: "1"}
        ]
    },
    "7": {
        description: "Сам иди долбаёб",
        variants: [
            {label: "*Перезагрузить долбаёба", nextDialog: "1"},
            {label: "*Перезагрузить долбаёба", nextDialog: "1"}
        ]
    },
    "8": {
        description: "Пизда АХАХАХАХАХ",
        variants: [
            {label: "*Перезагрузить долбаёба", nextDialog: "1"},
            {label: "*Перезагрузить долбаёба", nextDialog: "9"}
        ]
    },
    "9": {
        description: "ВСТАЛ УПАЙ УПАЙ ЧОКОПАЙ",
        variants: [
            {label: "*Перезагрузить долбаёба", nextDialog: "1"},
            {label: "*Перезагрузить долбаёба", nextDialog: "1"}
        ]
    }

};

export default dialogs