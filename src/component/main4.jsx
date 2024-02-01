const Main4 = () => {
    return ( 
        <>
        <div className="flex flex-col">
            <div className="flex flex-row-reverse w-full justify-evenly "> 
                <div>
                    <h1 className="text-orange-400 p-3">ارزهای دیجیتال یوبیتکس</h1>
                </div>
                <div>
                    <a href="#">
                        <button className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 rounded-md p-3 "> مشاهده همه</button>
                    </a>
                </div>
            </div>
            <table className="w-full ">
                <thead className="">
                    <tr className="flex flex-row-reverse mt-10 mb-5">
                        <th className="text-gray-300 mx-1" >ردیف</th>
                        <th className="text-gray-300 mx-2">نام/نماد</th>
                        <th className="text-gray-300 mr-28">(تومان)خرید</th>
                        <th className="text-gray-300 mr-10">(تومان)فروش</th>
                        <th className="text-gray-300 mr-10">(تومان)آخرین معامله</th>
                        <th className="text-gray-300" >تغییرات 24 ساعت</th>
                        <th className="text-gray-300">نمودار7روز گذشته</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="flex flex-row-reverse ">
                        <td className="text-gray-300 p-3">1</td>
                        <td>
                            <div className="flex flex-row-reverse">
                                <div className="w-10"> 
                                <img src="https://idea.ubitex.io//uploads/2023/1/7dcf7199-a57f-42d8-9214-bde3196f7782.svg" alt="اپتوس" />
                                </div>
                                <div className="flex flex-col p-3">
                                <div className="flex items-center space-x-2 space-x-reverse justify-end">
                                        <span className="text-gray-300 ">APT</span>
                                        </div>
                                      <span className="text-gray-300 ">اپتوس</span>
                                </div>
                            </div>
                        </td>
                        <td>
                           <span className="text-gray-300 p-3 mr-20">504,264</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-12">532,527</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-12">504,267</span>
                        </td>
                        <td>
                            <span className="flex items-center text-sm px-3 mr-20 rounded bg-opacity-10 bg-red-600 text-red-600">%0</span>
                        </td>
                        <td>
                            <div className="flex items-center filter-red mr-10"> 
                            <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/21794.svg" alt="---" />
                            </div>
                        
                        </td>
                        <td>
                            <div className="flex flex-row-reverse">
                                <a href="#">
                                    <button className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 mr-10 px-5 py-2 transition-all rounded">معامله</button>
                                </a>
                                <a href="#">
                                    <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10  px-5 py-2 transition-all rounded">اطلاعات بیشتر</button>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex flex-row-reverse">
                        <td className="text-gray-300 p-3">2</td>
                        <td>
                            <div className="flex flex-row-reverse">
                                <div className="w-10">
                                    <img src="https://idea.ubitex.io//uploads/2022/1/ac404a75-8dda-4055-a613-f4aada7b5960.svg" alt="بیبی دوج" />   
                                </div>
                                <div className="flex flex-col p-3">
                                <div className="flex items-center space-x-2 space-x-reverse justify-end">
                                <span className="text-gray-300 ">BABYDOGE</span>
                                </div>
                                <span className="text-gray-300 ">بیبی دوج</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-10">0.0000627</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-8">0.0000659</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-8">0.0000627</span>
                        </td>
                        <td>
                            <span className="flex items-center text-sm px-3 mr-14 rounded bg-opacity-10 bg-red-600 text-red-600">1.16-%</span>
                        </td>
                        <td className="mx-10">
                        <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/10407.svg" alt="---"/>
                        </td>
                        <td >
                            <div className="flex flex-row-reverse">
                            <a href="#">
                                <button className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">معامله</button>
                            </a>
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">اطلاعات بیشتر</button>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex flex-row-reverse">
                        <td className="text-gray-300 p-3">3</td>
                        <td>
                            <div className="flex flex-row-reverse">
                                <div className="w-10"> 
                                <img src="https://idea.ubitex.io//uploads/2022/1/f2d19cf3-96e8-4d45-b2f9-e9a2d0a19bc9.svg" alt="بیتکوین" />  
                                </div>
                                <div className="flex flex-col p-3">
                                <div className="flex items-center space-x-2 space-x-reverse justify-end">
                                <span className="text-gray-300 ">BTC</span>
                                </div>
                                <span className="text-gray-300 ">بیتکوین</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-16">2,414,258,485</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-2">2,467,264,047</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3">2,414,258,485</span>
                        </td>
                        <td>
                            <span className="flex items-center text-sm px-3 mr-10 rounded bg-opacity-10 bg-red-600 text-red-600">1.03-%</span>
                        </td>
                        <td className="mx-10">
                        <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg" alt="---" />
                        </td>
                        <td>
                            <div className="flex flex-row-reverse">
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">معامله</button>
                            </a>
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">اطلاعات بیشتر</button>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex flex-row-reverse">
                        <td className="text-gray-300 p-3">4</td>
                        <td>
                            <div className="flex flex-row-reverse">
                                <div className="w-10">
                                <img src="https://idea.ubitex.io//uploads/2022/4/b86e7c10-5d0a-4820-91d8-45d9c14b2381.svg" alt="استپن" /> 
                                </div>
                                <div className="flex flex-col p-3">
                                <div className="flex items-center space-x-2 space-x-reverse justify-end">
                                <span className="text-gray-300 ">GMT</span>
                                </div>
                                <span className="text-gray-300 ">استپن</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-20">13,955</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-14">14,674</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-14">13,955</span>
                        </td>
                        <td>
                            <span className="flex items-center text-sm px-3  mr-20 rounded bg-opacity-10 bg-red-600 text-red-600">3.48-%</span>
                        </td>
                        <td className="mx-10">
                        <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/18069.svg" alt="---"/>
                        </td>
                        <td>
                            <div className="flex flex-row-reverse">
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">معامله</button>
                            </a>
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">اطلاعات بیشتر</button>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex flex-row-reverse">
                        <td className="text-gray-300 p-3">5</td>
                        <td>
                            <div className="flex flex-row-reverse">
                                <div className="w-10">
                                <img src="https://idea.ubitex.io//uploads/2022/1/ace7653b-883c-4d00-ac54-837bfb590c34.svg" alt="اتریوم"/>
                                </div>
                                <div className="flex flex-col p-3">
                                <div className="flex items-center space-x-2 space-x-reverse justify-end">
                                <span className="text-gray-300 ">ETH</span>
                                </div>
                                <span className="text-gray-300 ">اتریوم</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-16">127,313,916</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-6">133,916,186</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-4">127,313,916</span>

                        </td>
                        <td>
                            <span className="flex items-center text-sm px-3 mr-10 rounded bg-opacity-10 bg-red-600 text-red-600">1.42-%</span>
                        </td>
                        <td className="mx-10">
                        <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg" alt="---" />
                        </td>
                        <td>
                            <div className="flex flex-row-reverse">
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">معامله</button>
                            </a>
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">اطلاعات بیشتر</button>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex flex-row-reverse">
                        <td className="text-gray-300 p-3">6</td>
                        <td>
                            <div className="flex flex-row-reverse">
                                <div className="w-10">
                                <img src="https://idea.ubitex.io//uploads/2022/1/8f683157-1157-4d97-ac0a-64a1d1368e52.svg" alt="شیبا اینو"/>
                                </div>
                                <div className="flex flex-col p-3">
                                <div className="flex items-center space-x-2 space-x-reverse justify-end">
                                <span className="text-gray-300 ">SHIB</span>
                                </div>
                                <span className="text-gray-300 ">شیبا اینو</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-16">0.495</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-16">0.5135</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-16">0.495</span>
                        </td>
                        <td>
                            <span className="flex items-center text-sm px-3 mr-16 rounded bg-opacity-10 bg-red-600 text-red-600">1.77-%</span>
                        </td>
                        <td className="mx-10">
                        <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5994.svg" alt="---"/>
                        </td>
                        <td>
                            <div className="flex flex-row-reverse">
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">معامله</button>
                            </a>
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">اطلاعات بیشتر</button>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex flex-row-reverse ">
                        <td className="text-gray-300 p-3">7</td>
                        <td>
                            <div className="flex flex-row-reverse">
                                <div className="w-10">
                                <img src="https://idea.ubitex.io//uploads/2022/1/edf090f5-d069-45b7-8f01-0966bdc1e88d.svg" alt="وراسیتی"/> 
                                </div>
                                <div className="flex flex-col p-3">
                                <div className="flex items-center space-x-2 space-x-reverse justify-end">
                                <span className="text-gray-300 ">VRA</span>
                                </div>
                                <span className="text-gray-300  ">وراسیتی</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-16">288</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-20">303</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-20">288</span>
                        </td>
                        <td>
                            <span className="flex items-center text-sm px-3  mr-20 rounded bg-opacity-10 bg-red-600 text-red-600">1.63-%</span>
                        </td>
                        <td className="mx-10">
                        <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3816.svg" alt="---"/>
                        </td>
                        <td>
                            <div className="flex flex-row-reverse">
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">معامله</button>
                            </a>
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">اطلاعات بیشتر</button>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex flex-row-reverse">
                        <td className="text-gray-300 p-3">8</td>
                        <td>
                            <div className="flex flex-row-reverse">
                                <div className="w-10">
                                <img src="https://idea.ubitex.io//uploads/2022/1/9ae0b653-fad1-4216-9f46-d7e251be657b.svg" alt="دی وای دی ایکس"/>
                                </div>
                                <div className="flex flex-col p-3">
                                <div className="flex items-center space-x-2 space-x-reverse justify-end">
                                <span className="text-gray-300 ">DYDX</span>
                                </div>
                                <span className="text-gray-300 ">دی وای دی ایکس</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3">146,834</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-14">154,435</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-12">146,834</span>
                        </td>
                        <td>
                            <span className="flex items-center text-sm px-3 mr-14 rounded bg-opacity-10 bg-red-600 text-red-600">1.57-%</span>
                        </td>
                        <td className="mx-10">
                        <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11156.svg" alt="---"/>
                        </td>
                        <td>
                            <div className="flex flex-row-reverse">
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">معامله</button>
                            </a>
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">اطلاعات بیشتر</button>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex flex-row-reverse">
                        <td className="text-gray-300 p-3">9</td>
                        <td>
                            <div className="flex flex-row-reverse">
                                <div className="w-10">
                                <img src="https://idea.ubitex.io//uploads/2022/4/87243049-9733-420d-88ff-d8fb29656ab8.svg" alt="ایپ کوین"/>
                                </div>
                                <div className="flex flex-col p-3">
                                <div className="flex items-center space-x-2 space-x-reverse justify-end">
                                <span className="text-gray-300 ">APE</span>
                                </div>
                                <span className="text-gray-300 ">ایپ کوین</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-10">80,184</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-16">84,362</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-16">80,184</span>
                        </td>
                        <td>
                            <span className="flex items-center text-sm px-3  mr-16 rounded bg-opacity-10 bg-green-600 text-green-600">8.35%</span>
                        </td>
                        <td className="mx-10">
                        <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/18876.svg" alt="---"/>
                        </td>
                        <td>
                            <div className="flex flex-row-reverse">
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">معامله</button>
                            </a>
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">اطلاعات بیشتر</button>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex flex-row-reverse ">
                        <td className="text-gray-300 p-3">10</td>
                        <td>
                        <div className="flex flex-row-reverse">
                                <div className="w-10">
                                <img src="https://idea.ubitex.io//uploads/2023/1/2661dab5-fcda-4f9b-bac4-bb718dc1547b.svg" alt="کیپر"/> 
                                </div>
                                <div className="flex flex-col p-3 ">
                                <div className="flex items-center space-x-2 space-x-reverse justify-end">
                                <span className="text-gray-300">KP3R</span>
                                </div>
                                <span className="text-gray-300">کیپر</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-12">3,911,096</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-10">4,140,634</span>
                        </td>
                        <td>
                            <span className="text-gray-300 p-3 mr-12">3,911,096</span>
                        </td>
                        <td>
                            <span className="flex items-center text-sm px-3 mx-12 rounded bg-opacity-10 bg-red-600 text-red-600">%0</span>
                        </td>
                        <td className="mx-20">
                            <span className="text-red-500">---</span>
                        </td>
                        <td>
                            <div className="flex flex-row-reverse">
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 mr-10 hover:bg-opacity-10 px-5 py-2 transition-all rounded">معامله</button>
                            </a>
                            <a href="#">
                                <button  className="text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 px-5 py-2 transition-all rounded">اطلاعات بیشتر</button>
                            </a>
                            </div>
                        </td>
                    </tr>
                   
                </tbody>
                <tfoot></tfoot>
                </table>
                </div>
                </>
     );
}
 
export default Main4;