﻿var list = [
    {
        "name": "Aniseed Syrup",
        "price": 190,
        "discount": 0.19,
        "date": "2000-03-16"
    },
    { "name": "Change", "price": 19, "discount": 0, "date": "1982-12-18" },
    { "name": "Aniseed Syrup", "price": 10, "discount": 0, "date": "1973-06-14" },
    { "name": "Chef Anton\u0027s Cajun Seasoning", "price": 22, "discount": 0, "date": "1976-03-10" },
    { "name": "Chef Anton\u0027s Gumbo Mix", "price": 21.35, "discount": 0, "date": "1978-12-06" },
    { "name": "Grandma\u0027s Boysenberry Spread", "price": 25, "discount": 0.03, "date": "1981-09-03" },
    { "name": "Uncle Bob\u0027s Organic Dried Pears", "price": 30, "discount": 0.03, "date": "1983-03-13" },
    { "name": "Northwoods Cranberry Sauce", "price": 40, "discount": 0.04, "date": "1972-02-26" },
    { "name": "Mishi Kobe Niku", "price": 97, "discount": 0.1, "date": "1985-12-10" },
    { "name": "Ikura", "price": 31, "discount": 0.03, "date": "1994-03-23" },
    { "name": "Queso Cabrales", "price": 21, "discount": 0, "date": "1985-11-28" },
    { "name": "Queso Manchego La Pastora", "price": 38, "discount": 0.04, "date": "1988-08-27" },
    { "name": "Konbu", "price": 6, "discount": 0.5, "date": "2002-07-01" },
    { "name": "Tofu", "price": 23.25, "discount": 0, "date": "2002-06-24" },
    { "name": "Genen Shouyu", "price": 15.5, "discount": 0, "date": "1991-05-04" },
    { "name": "Pavlova", "price": 17.45, "discount": 0, "date": "1996-11-09" },
    { "name": "Alice Mutton", "price": 39, "discount": 0.04, "date": "2007-12-15" },
    { "name": "Carnarvon Tigers", "price": 62.5, "discount": 0.06, "date": "2011-04-13" },
    { "name": "Teatime Chocolate Biscuits", "price": 9.2, "discount": 0.5, "date": "2005-02-02" },
    { "name": "Sir Rodney\u0027s Marmalade", "price": 81, "discount": 0.08, "date": "2007-11-01" },
    { "name": "Sir Rodney\u0027s Scones", "price": 10, "discount": 0, "date": "2010-07-29" },
    { "name": "Gustaf flower", "price": 21, "discount": 0, "date": "2008-12-01" },
    { "name": "Tunnbr Korea", "price": 9, "discount": 0.5, "date": "2011-08-31" },
    { "name": "Guarana¡ Fanta¡stica", "price": 4.5, "discount": 0.45, "date": "2008-03-13" },
    { "name": "NuNuCa Nuaa-Nougat-Creme", "price": 14, "discount": 0, "date": "2011-07-20" },
    { "name": "Gumbar Gummibarchen", "price": 31.23, "discount": 0.03, "date": "2009-04-17" },
    { "name": "Schoggi Schokolade", "price": 43.9, "discount": 0.04, "date": "2007-01-14" },
    { "name": "Russle Sauerkraut", "price": 45.6, "discount": 0.05, "date": "2011-01-14" },
    { "name": "Tharinger Rostbratwurst", "price": 123.79, "discount": 0.12, "date": "2010-12-21" },
    { "name": "Nord-Ost Matjeshering", "price": 25.89, "discount": 0.03, "date": "2011-05-14" },
    { "name": "Gorgonzola Telino", "price": 12.5, "discount": 0, "date": "2010-10-30" },
    { "name": "Mascarpone Fabioli", "price": 32, "discount": 0.03, "date": "2011-07-30" },
    { "name": "Geitost", "price": 2.5, "discount": 0.25, "date": "2010-04-29" },
    { "name": "Sasquatch Ale", "price": 14, "discount": 0, "date": "2010-07-30" },
    { "name": "Steeleye Stout", "price": 18, "discount": 0, "date": "2011-04-25" },
    { "name": "Inlagd Sill", "price": 19, "discount": 0, "date": "1980-11-28" },
    { "name": "Gravad lax", "price": 26, "discount": 0.03, "date": "1983-08-31" },
    { "name": "Cate de Blaye", "price": 263.5, "discount": 0.26, "date": "1981-07-12" },
    { "name": "Chartreuse verte", "price": 18, "discount": 0, "date": "1984-04-08" },
    { "name": "Boston Crab Meat", "price": 18.4, "discount": 0, "date": "1976-12-08" },
    { "name": "Jack\u0027s New England Clam Chowder", "price": 9.65, "discount": 0.5, "date": "1979-09-10" }, { "name": "Singaporean Hokkien Fried Mee", "price": 14, "discount": 0, "date": "1973-11-21" }, { "name": "Ipoh Coffee", "price": 46, "discount": 0.05, "date": "1980-03-20" }, { "name": "Gula Malacca", "price": 19.45, "discount": 0, "date": "1970-10-25" },
    { "name": "Rogede sild", "price": 9.5, "discount": 0.5, "date": "1990-09-21" },
    { "name": "Spegesild", "price": 12, "discount": 0, "date": "1993-06-23" },
    { "name": "Zaanse koeken", "price": 9.5, "discount": 0.5, "date": "1981-11-25" },
    { "name": "Chocolade", "price": 12.75, "discount": 0, "date": "1984-08-24" },
    { "name": "Maxilaku", "price": 20, "discount": 0, "date": "1987-05-23" }
]

