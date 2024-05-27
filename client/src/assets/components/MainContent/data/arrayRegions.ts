import { useGetRequest } from "../../../hook/useAudioArray";
import { Region } from "../../../types/exemple";

export  const arrayRegions:Region[] = useGetRequest("http://localhost:2000/api/regions").requestArray;
// console.log("url",useGetRequest("http://localhost:2000/api/regions"))

// [
//     {
//         name:"Рязань",
//         class:"ryazan-city",
//     },
//     {
//         name: "Александро - Невский район",
//         class: "alexandro-nevskiy-region",
//     },
//     {
//         name: "Ермишинский район",
//         class: "ermiishinskiy-region",
//     },
//     {
//         name: "Захаровский район",
//         class: "zaharovskiy-region",
//     },
//     {
//         name: "Кадомский район",
//         class: "kadomskiy-region",
//     },
//     {
//         name: "Касимовский район",
//         class: "kasimovskiy-region",
//     },
//     {
//         name: "Клепиковский район",
//         class: "klepikovskiy-region",
//     },
//     {
//         name: "Кораблинский район",
//         class: "korablinskiy-region"
//     },
//     {
//         name: "Милославский район",
//         class: "miloslavskiy-region",
//     },
//     {
//         name: "Михайловский район",
//         class: "mihaylov-region",
//     },
//     {
//         name: "Пителинский район",
//         class: "pitelenskiy-region",
//     },
//     {
//         name: "Пронский район",
//         class: "pronskiy-region",
//     },
//     {
//         name: "Путятинский район",
//         class: "putyatinskiy-region",
//     },
//     {
//         name: "Рыбновский район",
//         class: "ribnovskiy-region",
//     },
//     {
//         name: "Ряжский район",
//         class: "ryajskiy-region",
//     },
//     {
//         name: "Рязанский район",
//         class: "ryazanskiy-region",
//     },
//     {
//         name: "Сапожковский район",
//         class: "sapojskiy-region",
//     },
//     {
//         name: "Сараевский район",
//         class: "saraiysiy-region",
//     },
//     {
//         name: "Сасовский район",
//         class: "sasovskiy-region",
//     },
//     {
//         name: "Скопинский район",
//         class: "slopinskiy-region",
//     },
//     {
//         name: "Спасский район",
//         class: "spask-ryazanskiy-region",
//     },
//     {
//         name: "Старожиловский район",
//         class: "starojilovskiy-region",
//     },
//     {
//         name: "Ухоловский район",
//         class: "uhovskiy-region",
//     },
//     {
//         name: "Чучковский район",
//         class: "chuckovskiy-region",
//     },
//     {
//         name: "Шацкий район",
//         class: "shatskiy-region",
//     },
//     {
//         name: "Шиловский район",
//         class: "shilovskiy-region",
//     }
// ];
