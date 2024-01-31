const Header= () => {
    return ( 
        <>
        <div className="flex flex-row-reverse bg-slate-800 mt-0 justify-center opacity-90 "> 
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2"></svg> 
        <a href="#" className="text-orange-400  bg-yellow-900 bg-opacity-20 rounded-md m-3 p-2">ورود|ثبت نام</a>
        <a href="#" className="text-white m-3 p-2 hover:bg-yellow-900 hover:bg-opacity-20 hover:rounded-md hover:text-orange-400">بازارها</a>
        <a href="#" className="text-white m-3 p-2 hover:bg-yellow-900 hover:bg-opacity-20 hover:rounded-md hover:text-orange-400">
            <ul className="">معامله
                <li className="hidden hover:block hover:relative">تالار معاملات</li>
                <li className="hidden hover:block hover:relative">معاملات آنی</li>
                </ul></a>
        <a href="#" className="text-white m-3 p-2 hover:bg-yellow-900 hover:bg-opacity-20 hover:rounded-md hover:text-orange-400  flex flex-row-reverse">آکادمی
        <p className="text-orange-400 bg-yellow-900 bg-opacity-20 text-sm mr-2 px-2 rounded-md">جدید</p></a>
        <a href="#" className="text-white m-3 p-2 hover:bg-yellow-900 hover:bg-opacity-20 hover:rounded-md hover:text-orange-400">راهنمای استفاده</a>
        <a href="#" className="text-white m-3 p-2 hover:bg-yellow-900 hover:bg-opacity-20 hover:rounded-md hover:text-orange-400">بلاگ</a>
        <a href="#" className="text-white m-3 p-2 hover:bg-yellow-900 hover:bg-opacity-20 hover:rounded-md hover:text-orange-400">اپلیکیشن</a>
        <img src="./images/download.png" alt="لوگو یوبیتکس" className="mr-96"/>
        </div>
        </>
     );
}
 
export default Header;