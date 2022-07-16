function getData() {
    const users = [
        {
            id: 1,
            label: "Pepe",
            avatar: "",
            avatar: "../public/assets/user.jpg",
        },
        {
            id: 2,
            label: "Aaron",
            avatar: "../public/assets/user-2.jpg",
        },
        {
            id: 3,
            label: "Angela",
            avatar: "../public/assets/user-3.jpg",
        },
        {
            id: 4,
            label: "Angela",
            avatar: "../public/assets/user-4.jpg",
        },
    ];
   
    const cardShape = {
        label: true,
        description: true,
        progress: true,
        start_date: true,
        end_date: true,
        users: {
            show: true,
            values: users,
        },
        priority: {
            show: true,
            values: [
                { id: 1, color: "#FF1414", label: "Alta" },
                { id: 2, color: "#FF5700", label: "Media" },
                { id: 3, color: "#12B700", label: "Baja" },
            ],
        },
        color: true,
        menu: true,
        cover: true,
        attached: false,
    };
   
    const editorShape = [
        {
            type: "multiselect",
            key: "users",
            label: "Users",
            options: users,
        },
    ];
   
    const columns = [
        {
            label: "Por hacer",
            id: "backlog",
        },
        {
            label: "Lista para empezar",
            id: "readytostart",
        },
        {
            label: "En proceso",
            id: "inprogress",
        },
        {
            label: "Probando",
            id: "testing",
        },
        {
            label: "Finalizada",
            id: "done",
        },
    ];
   
    const rows = [
        {
            label: "Características",
            id: "feature",
        },
    ];
   
    const cards = [
        {
            label: "Angular y React",
            priority: 2,
            color: "#FF4400",
            description: "Integrar Angular y React para mejorar el aspecto visual del aplicativo",
            start_date: new Date("01/07/2022"),
            end_date: new Date("01/09/2022"),
            users: [3, 2],
            column: "backlog",
            type: "feature",
        },
        {
            label: "API",
            priority: 3,
            description: "Crear api para guardar datos",
            color: "#00C40A",
            start_date: new Date("09/26/2022"),
            end_date: new Date("09/30/2022"),
            users: [1, 4],
            column: "backlog",
            type: "feature",
        },
        {
            label: "Mejorar aspecto visual",
            priority: 1,
            description: "Colocar identidad visual",
            color: "#FF0000",
            start_date: new Date("08/01/2022"),
            end_date: new Date("08/05/2022"),
            users: [2],
            progress: 1,
            column: "readytostart",
            type: "feature",
        },
        {
            label: "Establecer prioridades de las tareas",
            description: "",
            color: "#00C40A",
            priority: 3,
            start_date: new Date("06/21/2022"),
            end_date: new Date("06/22/2022"),
            users: [4],
            progress: 75,
            column: "inprogress",
            type: "feature",
        },
        {
            label: "Arrastrar y soltar",
            priority: 1,
            color: "#FF0000",
            start_date: new Date("12/21/2022"),
            end_date: new Date("12/26/2022"),
            users: [3, 1],
            progress: 95,
            column: "testing",
            type: "feature",
        },
        {
            label: "Tarjetas y listas",
            priority: 3,
            description: "Crear tarjetas y listas desde la interfaz y desde el código",
            color: "#00C40A",
            start_date: new Date("07/30/2022"),
            end_date: new Date("08/05/2022"),
            users: [3, 2],
            progress: 100,
            column: "done",
            type: "feature",
        },
        {
            label: "Carriles",
            description: "Creación de listas",
            color: "#FF4400",
            priority: 2,
            start_date: new Date("08/06/2022"),
            end_date: new Date("08/10/2022"),
            users: [2],
            progress: 100,
            column: "done",
            type: "feature",
        },
    ];
   
    return {
        rows,
        columns,
        cards,
        users,
        cardShape,
        editorShape,
    };
   }