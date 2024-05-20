import React from "react";
import logo from '../../images/logo.svg';
import "./css/style.css";

/**
 * Подвал
 * @returns компонент "Подвал"
 */
export function Footer() {

    return (
        <footer>
            <div className='running-string'>
                {/* <marquee data-v-01038c1a="" loop="loop" scrollamount="10"> */}
                {/* <span data-v-01038c1a="" className="message__box"><p>Производство гражданской продукции существенно сократилось в 1944 г. и составило 61% по сравнению с довоенным уровнем, производство военной продукции за этот период увеличилось в 3,1 раза.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Всего за годы войны страна выпустила 102,8 тыс. шт. танков и САУ, 12139,3 тыс. шт. винтовок и карабинов, 112,1 тыс. шт. боевых самолетов. Резко (в 22,6 раза) выросло производство пистолетов-пулеметов в 1943 г. по сравнению со второй половиной 1941 г., производство пулеметов всех видов – в 4,3 раза, производство орудий всех видов и калибров – в 4,3 раза, производство танков в 1944 г. увеличилось в 6 раз.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Снижение стоимости некоторых видов вооружения и военной техники.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>В районах, подвергавшихся оккупации, выпускалось железной руды (71%), чугуна (71%), угля (63%), стали (58%) от общего производства.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>В целом в 1945 г. по сравнению с довоенным уровнем был рост в отдельных отраслях экономики: в цветной металлургии (111%), в машиностроении и металлообработке (129%) и, наоборот, отмечался спад производства в промышленности строительных материалов (46%), пищевой промышленности (50 %), легкой промышленности (62%).</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Производство важнейших видов промышленной продукции в СССР и РСФСР, в том числе непродовольственных (электроэнергии, чугуна, стали, проката черных металлов и т.д.) и продовольственных (мяса, масла, муки, крупы и т.д.).</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Восстановление промышленного производства до довоенного уровня.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>В районах, подвергавшихся оккупации, выращивалось 86% сахарной свеклы, 72% семян подсолнечника, 70% картофеля, около 60% производства основных продуктов животноводства (скот и птица на убой, молоко, яйца).</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Текст о сокращении материально-технической базы сельского хозяйства.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>За годы войны посевные площади сократились на 36,8 млн га, или на 24,5%, в том числе зерновых и зернобобовых культур – на 25,4 млн га (на 33%), технических культур – на 4,1 млн га (на 35%).</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Посевные площади основных сельскохозяйственных культур (график в динамике лет; в процентах к 1940 г.).</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Производство основных продуктов растениеводства. Снижение за годы войны в СССР производства зерна в 2 раза, семян подсолнечника и сахарной свеклы – в 3,3 раза, картофеля – в 1,3 раза.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Производство основных продуктов растениеводства (график в динамике). В 1941 г. по сравнению с 1940 г. резкий спад производства сахарной свеклы на 89%, семян подсолнечника – на 66%, картофеля – на 65%.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Производство основных продуктов животноводства.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Восстановление сельскохозяйственного производства до довоенного уровня.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Среднегодовая численность рабочих и служащих в экономике СССР.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Среднегодовая численность женщин-рабочих и служащих по отраслям экономики СССР.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Структура доходов Государственного бюджета СССР (диаграмма).</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Удельный вес расходов на оборону в Государственном бюджете СССР (график).</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Дефицит/профицит Государственного бюджета СССР.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Импорт СССР вооружения по годам, в том числе поставки из США по ленд-лизу по Соглашению от 11 июня 1942 г. (пистолеты-пулеметы, танки и САУ, орудия всех видов и калибров).</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Изменение удельного веса восточных районов СССР в общесоюзном производстве важнейших видов промышленной продукции.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Потери советских Вооруженных сил при освобождении республик СССР и потери советских Вооруженных сил при освобождении стран Европы и Азии.</p>
                </span><span data-v-01038c1a="" className="message__box"><p>Воинские захоронения в России и других государствах (по данным Управления Министерства обороны Российской Федерации по увековечению памяти погибших при защите Отечества). Наибольшее число захороненных на территории Польши, Белоруссии, Германии, Украины.</p>
                </span> */}
                <div className="items-wrap">
                    <div className="items marquee">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"><p>Воинские захоронения в России и других государствах (по данным Управления Министерства обороны Российской Федерации по увековечению памяти погибших при защите Отечества). Наибольшее число захороненных на территории Польши, Белоруссии, Германии, Украины.</p></div>
                    </div>
                    {/* <div aria-hidden="true" className="items marquee">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div> */}
                </div>
                {/* <div className="items-wrap">
                    <div className="items marquee reverce">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                    <div aria-hidden="true" className="items marquee reverce">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                </div> */}
                {/* </marquee> */}
                {/* <p>Рандомный текст</p> */}
            </div>
        </footer>
    );
}