const Main4 = () => {
    return ( 
        <>
        <div className="flex ">
            <table className="w-full mx-auto">
                <thead className="">
                    <tr className="flex flex-row-reverse ">
                        <th className="text-gray-300">ردیف</th>
                        <th className="text-gray-300">نام/نماد</th>
                        <th className="text-gray-300">(تومان)خرید</th>
                        <th className="text-gray-300">(تومان)فروش</th>
                        <th className="text-gray-300">(تومان)آخرین معامله</th>
                        <th className="text-gray-300" >تغییرات 24 ساعت</th>
                        <th className="text-gray-300">نمودار7روز گذشته</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <div>
                                <div>
                                    <img src="https://idea.ubitex.io//uploads/2023/1/7d">
                                </div>
                                <div></div>
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