import { Injectable } from "@angular/core";
import "devextreme/data/odata/store";
import DataSource from "devextreme/data/data_source";

export class Sale {
  id: number;
  region: string;
  country: string;
  city: string;
  amount: number;
  date: Date;
}

let sales: Sale[] = [
  {
    id: 10248,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 1740,
    date: new Date("2013-01-06")
  },
  {
    id: 10249,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 850,
    date: new Date("2013-01-13")
  },
  {
    id: 10250,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 2235,
    date: new Date("2013-01-07")
  },
  {
    id: 10251,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1965,
    date: new Date("2013-01-03")
  },
  {
    id: 10252,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 880,
    date: new Date("2013-01-10")
  },
  {
    id: 10253,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 5260,
    date: new Date("2013-01-17")
  },
  {
    id: 10254,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 2790,
    date: new Date("2013-01-21")
  },
  {
    id: 10255,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 3140,
    date: new Date("2013-01-01")
  },
  {
    id: 10256,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 6175,
    date: new Date("2013-01-24")
  },
  {
    id: 10257,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 4575,
    date: new Date("2013-01-11")
  },
  {
    id: 10258,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 3680,
    date: new Date("2013-01-12")
  },
  {
    id: 10259,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 2260,
    date: new Date("2013-01-01")
  },
  {
    id: 10260,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 2910,
    date: new Date("2013-01-26")
  },
  {
    id: 10261,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 8400,
    date: new Date("2013-01-05")
  },
  {
    id: 10262,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 1325,
    date: new Date("2013-01-14")
  },
  {
    id: 10263,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 3920,
    date: new Date("2013-01-05")
  },
  {
    id: 10264,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 2220,
    date: new Date("2013-01-15")
  },
  {
    id: 10265,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 940,
    date: new Date("2013-01-01")
  },
  {
    id: 10266,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1630,
    date: new Date("2013-01-10")
  },
  {
    id: 10267,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2910,
    date: new Date("2013-01-23")
  },
  {
    id: 10268,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 2600,
    date: new Date("2013-01-14")
  },
  {
    id: 10269,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 4340,
    date: new Date("2013-01-26")
  },
  {
    id: 10270,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 6650,
    date: new Date("2013-01-24")
  },
  {
    id: 10271,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 490,
    date: new Date("2013-01-22")
  },
  {
    id: 10272,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 3390,
    date: new Date("2013-01-25")
  },
  {
    id: 10273,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 5160,
    date: new Date("2013-02-20")
  },
  {
    id: 10274,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 5750,
    date: new Date("2013-02-12")
  },
  {
    id: 10275,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 2805,
    date: new Date("2013-02-13")
  },
  {
    id: 10276,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 2505,
    date: new Date("2013-02-09")
  },
  {
    id: 10277,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 930,
    date: new Date("2013-02-04")
  },
  {
    id: 10278,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 1240,
    date: new Date("2013-02-03")
  },
  {
    id: 10279,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 315,
    date: new Date("2013-02-04")
  },
  {
    id: 10280,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2870,
    date: new Date("2013-02-18")
  },
  {
    id: 10281,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 5150,
    date: new Date("2013-02-18")
  },
  {
    id: 10282,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 2725,
    date: new Date("2013-02-20")
  },
  {
    id: 10283,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 2840,
    date: new Date("2013-02-04")
  },
  {
    id: 10284,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 5840,
    date: new Date("2013-02-13")
  },
  {
    id: 10285,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 6750,
    date: new Date("2013-02-11")
  },
  {
    id: 10286,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 1200,
    date: new Date("2013-02-03")
  },
  {
    id: 10287,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 4550,
    date: new Date("2013-02-08")
  },
  {
    id: 10288,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 6040,
    date: new Date("2013-02-17")
  },
  {
    id: 10289,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 2205,
    date: new Date("2013-02-08")
  },
  {
    id: 10290,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 990,
    date: new Date("2013-02-20")
  },
  {
    id: 10291,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 700,
    date: new Date("2013-02-11")
  },
  {
    id: 10292,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 2325,
    date: new Date("2013-02-15")
  },
  {
    id: 10293,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 930,
    date: new Date("2013-02-21")
  },
  {
    id: 10294,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 1560,
    date: new Date("2013-02-04")
  },
  {
    id: 10295,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 1740,
    date: new Date("2013-03-04")
  },
  {
    id: 10296,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 3575,
    date: new Date("2013-03-20")
  },
  {
    id: 10297,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 4500,
    date: new Date("2013-03-04")
  },
  {
    id: 10298,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1605,
    date: new Date("2013-03-17")
  },
  {
    id: 10299,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 800,
    date: new Date("2013-03-21")
  },
  {
    id: 10300,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 640,
    date: new Date("2013-03-08")
  },
  {
    id: 10301,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 735,
    date: new Date("2013-03-19")
  },
  {
    id: 10302,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2520,
    date: new Date("2013-03-20")
  },
  {
    id: 10303,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 6675,
    date: new Date("2013-03-18")
  },
  {
    id: 10304,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 3625,
    date: new Date("2013-03-25")
  },
  {
    id: 10305,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 1200,
    date: new Date("2013-03-07")
  },
  {
    id: 10306,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 2000,
    date: new Date("2013-03-07")
  },
  {
    id: 10307,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 1410,
    date: new Date("2013-03-10")
  },
  {
    id: 10308,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 2700,
    date: new Date("2013-03-19")
  },
  {
    id: 10309,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 5950,
    date: new Date("2013-03-24")
  },
  {
    id: 10310,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 5120,
    date: new Date("2013-03-08")
  },
  {
    id: 10311,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 1980,
    date: new Date("2013-03-17")
  },
  {
    id: 10312,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1110,
    date: new Date("2013-03-08")
  },
  {
    id: 10313,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 980,
    date: new Date("2013-03-21")
  },
  {
    id: 10314,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 5460,
    date: new Date("2013-03-19")
  },
  {
    id: 10315,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 3800,
    date: new Date("2013-03-12")
  },
  {
    id: 10316,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 2610,
    date: new Date("2013-03-04")
  },
  {
    id: 10317,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 3080,
    date: new Date("2013-03-22")
  },
  {
    id: 10318,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 2010,
    date: new Date("2013-03-23")
  },
  {
    id: 10319,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 1200,
    date: new Date("2013-03-04")
  },
  {
    id: 10320,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 7680,
    date: new Date("2013-04-15")
  },
  {
    id: 10321,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 1325,
    date: new Date("2013-04-07")
  },
  {
    id: 10322,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 2835,
    date: new Date("2013-04-10")
  },
  {
    id: 10323,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 3660,
    date: new Date("2013-04-10")
  },
  {
    id: 10324,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 390,
    date: new Date("2013-04-12")
  },
  {
    id: 10325,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 4420,
    date: new Date("2013-04-08")
  },
  {
    id: 10326,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 1755,
    date: new Date("2013-04-13")
  },
  {
    id: 10327,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2580,
    date: new Date("2013-04-15")
  },
  {
    id: 10328,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 850,
    date: new Date("2013-04-01")
  },
  {
    id: 10329,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 2825,
    date: new Date("2013-04-10")
  },
  {
    id: 10330,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 540,
    date: new Date("2013-04-06")
  },
  {
    id: 10331,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 1520,
    date: new Date("2013-04-08")
  },
  {
    id: 10332,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 8760,
    date: new Date("2013-04-26")
  },
  {
    id: 10333,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 1110,
    date: new Date("2013-04-16")
  },
  {
    id: 10334,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 6850,
    date: new Date("2013-04-19")
  },
  {
    id: 10335,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 1940,
    date: new Date("2013-04-23")
  },
  {
    id: 10336,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 1980,
    date: new Date("2013-04-21")
  },
  {
    id: 10337,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 3090,
    date: new Date("2013-04-03")
  },
  {
    id: 10338,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1640,
    date: new Date("2013-04-24")
  },
  {
    id: 10339,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 3585,
    date: new Date("2013-04-01")
  },
  {
    id: 10340,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1770,
    date: new Date("2013-04-01")
  },
  {
    id: 10341,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 4005,
    date: new Date("2013-04-04")
  },
  {
    id: 10342,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2870,
    date: new Date("2013-04-02")
  },
  {
    id: 10343,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 960,
    date: new Date("2013-04-20")
  },
  {
    id: 10344,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 8640,
    date: new Date("2013-05-14")
  },
  {
    id: 10345,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 5450,
    date: new Date("2013-05-24")
  },
  {
    id: 10346,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 2535,
    date: new Date("2013-05-07")
  },
  {
    id: 10347,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1155,
    date: new Date("2013-05-20")
  },
  {
    id: 10348,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 3140,
    date: new Date("2013-05-18")
  },
  {
    id: 10349,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 2260,
    date: new Date("2013-05-19")
  },
  {
    id: 10350,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 1215,
    date: new Date("2013-05-23")
  },
  {
    id: 10351,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1210,
    date: new Date("2013-05-08")
  },
  {
    id: 10352,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 875,
    date: new Date("2013-05-25")
  },
  {
    id: 10353,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 5400,
    date: new Date("2013-05-03")
  },
  {
    id: 10354,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 5940,
    date: new Date("2013-05-25")
  },
  {
    id: 10355,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 4700,
    date: new Date("2013-05-03")
  },
  {
    id: 10356,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 5520,
    date: new Date("2013-05-12")
  },
  {
    id: 10357,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 9210,
    date: new Date("2013-05-22")
  },
  {
    id: 10358,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 7950,
    date: new Date("2013-05-12")
  },
  {
    id: 10359,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 3740,
    date: new Date("2013-05-24")
  },
  {
    id: 10360,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 990,
    date: new Date("2013-05-02")
  },
  {
    id: 10361,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 3190,
    date: new Date("2013-05-03")
  },
  {
    id: 10362,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 2430,
    date: new Date("2013-05-11")
  },
  {
    id: 10363,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 7380,
    date: new Date("2013-06-15")
  },
  {
    id: 10364,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 4475,
    date: new Date("2013-06-08")
  },
  {
    id: 10365,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 1290,
    date: new Date("2013-06-10")
  },
  {
    id: 10366,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 2250,
    date: new Date("2013-06-10")
  },
  {
    id: 10367,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 350,
    date: new Date("2013-06-22")
  },
  {
    id: 10368,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 5480,
    date: new Date("2013-06-24")
  },
  {
    id: 10369,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 2355,
    date: new Date("2013-06-10")
  },
  {
    id: 10370,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1960,
    date: new Date("2013-06-23")
  },
  {
    id: 10371,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 4125,
    date: new Date("2013-06-06")
  },
  {
    id: 10372,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 7925,
    date: new Date("2013-06-12")
  },
  {
    id: 10373,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 1120,
    date: new Date("2013-06-22")
  },
  {
    id: 10374,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 5100,
    date: new Date("2013-06-01")
  },
  {
    id: 10375,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 1500,
    date: new Date("2013-06-25")
  },
  {
    id: 10376,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 5130,
    date: new Date("2013-06-10")
  },
  {
    id: 10377,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 2475,
    date: new Date("2013-06-10")
  },
  {
    id: 10378,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 2100,
    date: new Date("2013-06-06")
  },
  {
    id: 10379,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 3570,
    date: new Date("2013-06-10")
  },
  {
    id: 10380,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 550,
    date: new Date("2013-06-02")
  },
  {
    id: 10381,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 2850,
    date: new Date("2013-06-26")
  },
  {
    id: 10382,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 4280,
    date: new Date("2013-06-19")
  },
  {
    id: 10383,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 1460,
    date: new Date("2013-06-17")
  },
  {
    id: 10384,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 960,
    date: new Date("2013-06-17")
  },
  {
    id: 10385,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1520,
    date: new Date("2013-06-03")
  },
  {
    id: 10386,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 6750,
    date: new Date("2013-06-21")
  },
  {
    id: 10387,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 7260,
    date: new Date("2013-07-14")
  },
  {
    id: 10388,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 2450,
    date: new Date("2013-07-11")
  },
  {
    id: 10389,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 3540,
    date: new Date("2013-07-02")
  },
  {
    id: 10390,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1950,
    date: new Date("2013-07-03")
  },
  {
    id: 10391,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 360,
    date: new Date("2013-07-07")
  },
  {
    id: 10392,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 4500,
    date: new Date("2013-07-03")
  },
  {
    id: 10393,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 4575,
    date: new Date("2013-07-21")
  },
  {
    id: 10394,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2310,
    date: new Date("2013-07-18")
  },
  {
    id: 10395,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 7500,
    date: new Date("2013-07-04")
  },
  {
    id: 10396,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 3575,
    date: new Date("2013-07-23")
  },
  {
    id: 10397,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 760,
    date: new Date("2013-07-01")
  },
  {
    id: 10398,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 2400,
    date: new Date("2013-07-11")
  },
  {
    id: 10399,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 3330,
    date: new Date("2013-07-04")
  },
  {
    id: 10400,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 3480,
    date: new Date("2013-07-23")
  },
  {
    id: 10401,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 4875,
    date: new Date("2013-07-11")
  },
  {
    id: 10402,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 4980,
    date: new Date("2013-07-19")
  },
  {
    id: 10403,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 2580,
    date: new Date("2013-07-04")
  },
  {
    id: 10404,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 2650,
    date: new Date("2013-07-16")
  },
  {
    id: 10405,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1190,
    date: new Date("2013-07-02")
  },
  {
    id: 10406,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 960,
    date: new Date("2013-07-26")
  },
  {
    id: 10407,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 3600,
    date: new Date("2013-08-08")
  },
  {
    id: 10408,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 2250,
    date: new Date("2013-08-01")
  },
  {
    id: 10409,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 1275,
    date: new Date("2013-08-02")
  },
  {
    id: 10410,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 3885,
    date: new Date("2013-08-14")
  },
  {
    id: 10411,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 1900,
    date: new Date("2013-08-05")
  },
  {
    id: 10412,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 2300,
    date: new Date("2013-08-09")
  },
  {
    id: 10413,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 2895,
    date: new Date("2013-08-15")
  },
  {
    id: 10414,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 350,
    date: new Date("2013-08-20")
  },
  {
    id: 10415,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 4200,
    date: new Date("2013-08-22")
  },
  {
    id: 10416,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 7175,
    date: new Date("2013-08-14")
  },
  {
    id: 10417,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 4420,
    date: new Date("2013-08-24")
  },
  {
    id: 10418,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 5200,
    date: new Date("2013-08-21")
  },
  {
    id: 10419,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 7920,
    date: new Date("2013-08-17")
  },
  {
    id: 10420,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 6990,
    date: new Date("2013-08-22")
  },
  {
    id: 10421,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 2125,
    date: new Date("2013-08-05")
  },
  {
    id: 10422,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 2220,
    date: new Date("2013-08-16")
  },
  {
    id: 10423,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 1575,
    date: new Date("2013-08-23")
  },
  {
    id: 10424,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1880,
    date: new Date("2013-08-12")
  },
  {
    id: 10425,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 710,
    date: new Date("2013-08-25")
  },
  {
    id: 10426,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 390,
    date: new Date("2013-08-20")
  },
  {
    id: 10427,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 4635,
    date: new Date("2013-08-04")
  },
  {
    id: 10428,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 4350,
    date: new Date("2013-08-19")
  },
  {
    id: 10429,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 6020,
    date: new Date("2013-08-02")
  },
  {
    id: 10430,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 3660,
    date: new Date("2013-08-19")
  },
  {
    id: 10431,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 4525,
    date: new Date("2013-08-24")
  },
  {
    id: 10432,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 4410,
    date: new Date("2013-09-12")
  },
  {
    id: 10433,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 1725,
    date: new Date("2013-09-07")
  },
  {
    id: 10434,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 2715,
    date: new Date("2013-09-14")
  },
  {
    id: 10435,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 2820,
    date: new Date("2013-09-08")
  },
  {
    id: 10436,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2310,
    date: new Date("2013-09-12")
  },
  {
    id: 10437,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 780,
    date: new Date("2013-09-08")
  },
  {
    id: 10438,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 2370,
    date: new Date("2013-09-19")
  },
  {
    id: 10439,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1410,
    date: new Date("2013-09-09")
  },
  {
    id: 10440,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 1825,
    date: new Date("2013-09-23")
  },
  {
    id: 10441,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 4075,
    date: new Date("2013-09-06")
  },
  {
    id: 10442,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 1020,
    date: new Date("2013-09-04")
  },
  {
    id: 10443,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 4320,
    date: new Date("2013-09-25")
  },
  {
    id: 10444,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 7530,
    date: new Date("2013-09-13")
  },
  {
    id: 10445,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 2820,
    date: new Date("2013-09-08")
  },
  {
    id: 10446,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 3050,
    date: new Date("2013-09-04")
  },
  {
    id: 10447,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 5080,
    date: new Date("2013-09-25")
  },
  {
    id: 10448,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 1125,
    date: new Date("2013-09-13")
  },
  {
    id: 10449,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 850,
    date: new Date("2013-09-24")
  },
  {
    id: 10450,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1440,
    date: new Date("2013-09-19")
  },
  {
    id: 10451,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1950,
    date: new Date("2013-09-02")
  },
  {
    id: 10452,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 6390,
    date: new Date("2013-10-11")
  },
  {
    id: 10453,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 4625,
    date: new Date("2013-10-02")
  },
  {
    id: 10454,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 3510,
    date: new Date("2013-10-24")
  },
  {
    id: 10455,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 2730,
    date: new Date("2013-10-15")
  },
  {
    id: 10456,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2070,
    date: new Date("2013-10-15")
  },
  {
    id: 10457,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 2320,
    date: new Date("2013-10-18")
  },
  {
    id: 10458,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 4260,
    date: new Date("2013-10-24")
  },
  {
    id: 10459,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 840,
    date: new Date("2013-10-18")
  },
  {
    id: 10460,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 7300,
    date: new Date("2013-10-24")
  },
  {
    id: 10461,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 5950,
    date: new Date("2013-10-11")
  },
  {
    id: 10462,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 3220,
    date: new Date("2013-10-25")
  },
  {
    id: 10463,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 3480,
    date: new Date("2013-10-08")
  },
  {
    id: 10464,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 4830,
    date: new Date("2013-10-26")
  },
  {
    id: 10465,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 4470,
    date: new Date("2013-10-05")
  },
  {
    id: 10466,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 3675,
    date: new Date("2013-10-23")
  },
  {
    id: 10467,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 4260,
    date: new Date("2013-10-01")
  },
  {
    id: 10468,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 4245,
    date: new Date("2013-10-26")
  },
  {
    id: 10469,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1470,
    date: new Date("2013-10-01")
  },
  {
    id: 10470,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1810,
    date: new Date("2013-10-02")
  },
  {
    id: 10471,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 600,
    date: new Date("2013-10-23")
  },
  {
    id: 10472,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 7500,
    date: new Date("2013-11-03")
  },
  {
    id: 10473,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 4625,
    date: new Date("2013-11-02")
  },
  {
    id: 10474,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 2625,
    date: new Date("2013-11-09")
  },
  {
    id: 10475,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1440,
    date: new Date("2013-11-15")
  },
  {
    id: 10476,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2420,
    date: new Date("2013-11-15")
  },
  {
    id: 10477,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 4180,
    date: new Date("2013-11-15")
  },
  {
    id: 10478,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 3720,
    date: new Date("2013-11-25")
  },
  {
    id: 10479,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2730,
    date: new Date("2013-11-08")
  },
  {
    id: 10480,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 3775,
    date: new Date("2013-11-17")
  },
  {
    id: 10481,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 3525,
    date: new Date("2013-11-15")
  },
  {
    id: 10482,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 5320,
    date: new Date("2013-11-08")
  },
  {
    id: 10483,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 5340,
    date: new Date("2013-11-13")
  },
  {
    id: 10484,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 8850,
    date: new Date("2013-11-01")
  },
  {
    id: 10485,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 7050,
    date: new Date("2013-11-14")
  },
  {
    id: 10486,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 4200,
    date: new Date("2013-11-18")
  },
  {
    id: 10487,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 4960,
    date: new Date("2013-11-04")
  },
  {
    id: 10488,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 2280,
    date: new Date("2013-11-13")
  },
  {
    id: 10489,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 590,
    date: new Date("2013-11-11")
  },
  {
    id: 10490,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 810,
    date: new Date("2013-11-12")
  },
  {
    id: 10491,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 2625,
    date: new Date("2013-11-07")
  },
  {
    id: 10492,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 8280,
    date: new Date("2013-12-01")
  },
  {
    id: 10493,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 5650,
    date: new Date("2013-12-19")
  },
  {
    id: 10494,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 2760,
    date: new Date("2013-12-14")
  },
  {
    id: 10495,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 2670,
    date: new Date("2013-12-03")
  },
  {
    id: 10496,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2520,
    date: new Date("2013-12-20")
  },
  {
    id: 10497,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 4080,
    date: new Date("2013-12-21")
  },
  {
    id: 10498,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 4140,
    date: new Date("2013-12-22")
  },
  {
    id: 10499,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 390,
    date: new Date("2013-12-04")
  },
  {
    id: 10500,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 1400,
    date: new Date("2013-12-19")
  },
  {
    id: 10501,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 7275,
    date: new Date("2013-12-22")
  },
  {
    id: 10502,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 4100,
    date: new Date("2013-12-20")
  },
  {
    id: 10503,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 5520,
    date: new Date("2013-12-25")
  },
  {
    id: 10504,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 9210,
    date: new Date("2013-12-24")
  },
  {
    id: 10505,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 7290,
    date: new Date("2013-12-05")
  },
  {
    id: 10506,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 625,
    date: new Date("2013-12-22")
  },
  {
    id: 10507,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 4460,
    date: new Date("2013-12-12")
  },
  {
    id: 10508,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 3825,
    date: new Date("2013-12-13")
  },
  {
    id: 10509,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 2850,
    date: new Date("2013-12-17")
  },
  {
    id: 10510,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 2780,
    date: new Date("2013-12-07")
  },
  {
    id: 10511,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 840,
    date: new Date("2013-12-18")
  },
  {
    id: 10512,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 2970,
    date: new Date("2013-12-23")
  },
  {
    id: 10513,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 945,
    date: new Date("2013-12-06")
  },
  {
    id: 10514,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 2625,
    date: new Date("2013-12-04")
  },
  {
    id: 10515,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 390,
    date: new Date("2013-12-01")
  },
  {
    id: 10516,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 2250,
    date: new Date("2013-12-02")
  },
  {
    id: 10517,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 7710,
    date: new Date("2014-01-18")
  },
  {
    id: 10518,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 7975,
    date: new Date("2014-01-10")
  },
  {
    id: 10519,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 3285,
    date: new Date("2014-01-13")
  },
  {
    id: 10520,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 2580,
    date: new Date("2014-01-22")
  },
  {
    id: 10521,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2160,
    date: new Date("2014-01-26")
  },
  {
    id: 10522,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 1100,
    date: new Date("2014-01-25")
  },
  {
    id: 10523,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 4425,
    date: new Date("2014-01-21")
  },
  {
    id: 10524,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1360,
    date: new Date("2014-01-22")
  },
  {
    id: 10525,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 3250,
    date: new Date("2014-01-14")
  },
  {
    id: 10526,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 5550,
    date: new Date("2014-01-21")
  },
  {
    id: 10527,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 2860,
    date: new Date("2014-01-25")
  },
  {
    id: 10528,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 5320,
    date: new Date("2014-01-08")
  },
  {
    id: 10529,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 4050,
    date: new Date("2014-01-14")
  },
  {
    id: 10530,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 3450,
    date: new Date("2014-01-24")
  },
  {
    id: 10531,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 5425,
    date: new Date("2014-01-11")
  },
  {
    id: 10532,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 4860,
    date: new Date("2014-01-12")
  },
  {
    id: 10533,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 4695,
    date: new Date("2014-01-16")
  },
  {
    id: 10534,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 610,
    date: new Date("2014-01-05")
  },
  {
    id: 10535,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1580,
    date: new Date("2014-01-15")
  },
  {
    id: 10536,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 3780,
    date: new Date("2014-02-18")
  },
  {
    id: 10537,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 5400,
    date: new Date("2014-02-21")
  },
  {
    id: 10538,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 630,
    date: new Date("2014-02-18")
  },
  {
    id: 10539,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 3960,
    date: new Date("2014-02-04")
  },
  {
    id: 10540,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2010,
    date: new Date("2014-02-25")
  },
  {
    id: 10541,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 5000,
    date: new Date("2014-02-01")
  },
  {
    id: 10542,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 1995,
    date: new Date("2014-02-20")
  },
  {
    id: 10543,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 860,
    date: new Date("2014-02-12")
  },
  {
    id: 10544,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 2150,
    date: new Date("2014-02-10")
  },
  {
    id: 10545,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 4050,
    date: new Date("2014-02-06")
  },
  {
    id: 10546,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 2960,
    date: new Date("2014-02-18")
  },
  {
    id: 10547,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 1780,
    date: new Date("2014-02-26")
  },
  {
    id: 10548,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 8700,
    date: new Date("2014-02-03")
  },
  {
    id: 10549,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 3390,
    date: new Date("2014-02-03")
  },
  {
    id: 10550,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 4425,
    date: new Date("2014-02-15")
  },
  {
    id: 10551,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 1180,
    date: new Date("2014-02-23")
  },
  {
    id: 10552,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 360,
    date: new Date("2014-02-08")
  },
  {
    id: 10553,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 2310,
    date: new Date("2014-02-13")
  },
  {
    id: 10554,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1770,
    date: new Date("2014-02-20")
  },
  {
    id: 10555,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 3060,
    date: new Date("2014-02-26")
  },
  {
    id: 10556,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 1750,
    date: new Date("2014-02-12")
  },
  {
    id: 10557,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 2280,
    date: new Date("2014-03-09")
  },
  {
    id: 10558,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 7600,
    date: new Date("2014-03-25")
  },
  {
    id: 10559,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 1035,
    date: new Date("2014-03-23")
  },
  {
    id: 10560,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1245,
    date: new Date("2014-03-01")
  },
  {
    id: 10561,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2860,
    date: new Date("2014-03-19")
  },
  {
    id: 10562,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 440,
    date: new Date("2014-03-19")
  },
  {
    id: 10563,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 4665,
    date: new Date("2014-03-02")
  },
  {
    id: 10564,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2270,
    date: new Date("2014-03-15")
  },
  {
    id: 10565,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 5000,
    date: new Date("2014-03-09")
  },
  {
    id: 10566,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 5100,
    date: new Date("2014-03-23")
  },
  {
    id: 10567,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 2120,
    date: new Date("2014-03-11")
  },
  {
    id: 10568,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 5140,
    date: new Date("2014-03-05")
  },
  {
    id: 10569,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 6210,
    date: new Date("2014-03-19")
  },
  {
    id: 10570,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 9510,
    date: new Date("2014-03-19")
  },
  {
    id: 10571,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 7600,
    date: new Date("2014-03-21")
  },
  {
    id: 10572,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 5420,
    date: new Date("2014-03-15")
  },
  {
    id: 10573,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 1980,
    date: new Date("2014-03-05")
  },
  {
    id: 10574,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1820,
    date: new Date("2014-03-07")
  },
  {
    id: 10575,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1670,
    date: new Date("2014-03-21")
  },
  {
    id: 10576,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 4800,
    date: new Date("2014-03-08")
  },
  {
    id: 10577,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 2925,
    date: new Date("2014-03-03")
  },
  {
    id: 10578,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 2940,
    date: new Date("2014-04-11")
  },
  {
    id: 10579,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 3525,
    date: new Date("2014-04-13")
  },
  {
    id: 10580,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 2475,
    date: new Date("2014-04-22")
  },
  {
    id: 10581,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 3315,
    date: new Date("2014-04-08")
  },
  {
    id: 10582,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 3140,
    date: new Date("2014-04-07")
  },
  {
    id: 10583,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 2520,
    date: new Date("2014-04-01")
  },
  {
    id: 10584,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 1200,
    date: new Date("2014-04-10")
  },
  {
    id: 10585,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2060,
    date: new Date("2014-04-21")
  },
  {
    id: 10586,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 7875,
    date: new Date("2014-04-02")
  },
  {
    id: 10587,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 1450,
    date: new Date("2014-04-07")
  },
  {
    id: 10588,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 2640,
    date: new Date("2014-04-22")
  },
  {
    id: 10589,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 1960,
    date: new Date("2014-04-16")
  },
  {
    id: 10590,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 2250,
    date: new Date("2014-04-23")
  },
  {
    id: 10591,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 4500,
    date: new Date("2014-04-05")
  },
  {
    id: 10592,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 5050,
    date: new Date("2014-04-11")
  },
  {
    id: 10593,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 2940,
    date: new Date("2014-04-02")
  },
  {
    id: 10594,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 2880,
    date: new Date("2014-04-14")
  },
  {
    id: 10595,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1050,
    date: new Date("2014-04-19")
  },
  {
    id: 10596,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1850,
    date: new Date("2014-04-02")
  },
  {
    id: 10597,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 3160,
    date: new Date("2014-04-01")
  },
  {
    id: 10598,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 875,
    date: new Date("2014-04-04")
  },
  {
    id: 10599,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 3200,
    date: new Date("2014-04-08")
  },
  {
    id: 10600,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 1380,
    date: new Date("2014-04-21")
  },
  {
    id: 10601,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 3060,
    date: new Date("2014-04-06")
  },
  {
    id: 10602,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 6690,
    date: new Date("2014-05-19")
  },
  {
    id: 10603,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 4525,
    date: new Date("2014-05-15")
  },
  {
    id: 10604,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 4665,
    date: new Date("2014-05-10")
  },
  {
    id: 10605,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 4530,
    date: new Date("2014-05-18")
  },
  {
    id: 10606,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 1330,
    date: new Date("2014-05-08")
  },
  {
    id: 10607,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 1720,
    date: new Date("2014-05-20")
  },
  {
    id: 10608,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 3750,
    date: new Date("2014-05-16")
  },
  {
    id: 10609,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1290,
    date: new Date("2014-05-10")
  },
  {
    id: 10610,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 4925,
    date: new Date("2014-05-14")
  },
  {
    id: 10611,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 4300,
    date: new Date("2014-05-22")
  },
  {
    id: 10612,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 5740,
    date: new Date("2014-05-08")
  },
  {
    id: 10613,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 3760,
    date: new Date("2014-05-18")
  },
  {
    id: 10614,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 7920,
    date: new Date("2014-05-22")
  },
  {
    id: 10615,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 1440,
    date: new Date("2014-05-21")
  },
  {
    id: 10616,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 5975,
    date: new Date("2014-05-25")
  },
  {
    id: 10617,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 4440,
    date: new Date("2014-05-05")
  },
  {
    id: 10618,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 2310,
    date: new Date("2014-05-24")
  },
  {
    id: 10619,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 2250,
    date: new Date("2014-05-06")
  },
  {
    id: 10620,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 2320,
    date: new Date("2014-05-14")
  },
  {
    id: 10621,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 8370,
    date: new Date("2014-05-06")
  },
  {
    id: 10622,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 5190,
    date: new Date("2014-06-26")
  },
  {
    id: 10623,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 925,
    date: new Date("2014-06-04")
  },
  {
    id: 10624,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 3240,
    date: new Date("2014-06-20")
  },
  {
    id: 10625,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 3180,
    date: new Date("2014-06-23")
  },
  {
    id: 10626,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 780,
    date: new Date("2014-06-13")
  },
  {
    id: 10627,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 4680,
    date: new Date("2014-06-08")
  },
  {
    id: 10628,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 2475,
    date: new Date("2014-06-25")
  },
  {
    id: 10629,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1920,
    date: new Date("2014-06-20")
  },
  {
    id: 10630,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 7500,
    date: new Date("2014-06-25")
  },
  {
    id: 10631,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 5025,
    date: new Date("2014-06-26")
  },
  {
    id: 10632,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 2400,
    date: new Date("2014-06-08")
  },
  {
    id: 10633,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 1720,
    date: new Date("2014-06-09")
  },
  {
    id: 10634,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 2880,
    date: new Date("2014-06-21")
  },
  {
    id: 10635,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 5430,
    date: new Date("2014-06-03")
  },
  {
    id: 10636,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 4475,
    date: new Date("2014-06-19")
  },
  {
    id: 10637,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 1420,
    date: new Date("2014-06-20")
  },
  {
    id: 10638,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 2670,
    date: new Date("2014-06-25")
  },
  {
    id: 10639,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1930,
    date: new Date("2014-06-02")
  },
  {
    id: 10640,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 580,
    date: new Date("2014-06-25")
  },
  {
    id: 10641,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1620,
    date: new Date("2014-06-12")
  },
  {
    id: 10642,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 4530,
    date: new Date("2014-06-02")
  },
  {
    id: 10643,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 6025,
    date: new Date("2014-06-23")
  },
  {
    id: 10644,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 3540,
    date: new Date("2014-07-21")
  },
  {
    id: 10645,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 3000,
    date: new Date("2014-07-01")
  },
  {
    id: 10646,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 3240,
    date: new Date("2014-07-26")
  },
  {
    id: 10647,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 2265,
    date: new Date("2014-07-22")
  },
  {
    id: 10648,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 400,
    date: new Date("2014-07-09")
  },
  {
    id: 10649,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 1460,
    date: new Date("2014-07-08")
  },
  {
    id: 10650,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 1620,
    date: new Date("2014-07-18")
  },
  {
    id: 10651,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2400,
    date: new Date("2014-07-25")
  },
  {
    id: 10652,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 5275,
    date: new Date("2014-07-04")
  },
  {
    id: 10653,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 4475,
    date: new Date("2014-07-03")
  },
  {
    id: 10654,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 3980,
    date: new Date("2014-07-21")
  },
  {
    id: 10655,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 5240,
    date: new Date("2014-07-11")
  },
  {
    id: 10656,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 1200,
    date: new Date("2014-07-21")
  },
  {
    id: 10657,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 5700,
    date: new Date("2014-07-18")
  },
  {
    id: 10658,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 5575,
    date: new Date("2014-07-01")
  },
  {
    id: 10659,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 2160,
    date: new Date("2014-07-02")
  },
  {
    id: 10660,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 960,
    date: new Date("2014-07-09")
  },
  {
    id: 10661,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1280,
    date: new Date("2014-07-04")
  },
  {
    id: 10662,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1040,
    date: new Date("2014-07-02")
  },
  {
    id: 10663,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 5520,
    date: new Date("2014-07-21")
  },
  {
    id: 10664,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1760,
    date: new Date("2014-07-25")
  },
  {
    id: 10665,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 4080,
    date: new Date("2014-07-07")
  },
  {
    id: 10666,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1000,
    date: new Date("2014-07-21")
  },
  {
    id: 10667,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 3270,
    date: new Date("2014-07-12")
  },
  {
    id: 10668,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 1770,
    date: new Date("2014-08-23")
  },
  {
    id: 10669,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 2700,
    date: new Date("2014-08-09")
  },
  {
    id: 10670,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 2175,
    date: new Date("2014-08-03")
  },
  {
    id: 10671,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 3375,
    date: new Date("2014-08-11")
  },
  {
    id: 10672,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2040,
    date: new Date("2014-08-01")
  },
  {
    id: 10673,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 3000,
    date: new Date("2014-08-21")
  },
  {
    id: 10674,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 3900,
    date: new Date("2014-08-16")
  },
  {
    id: 10675,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1370,
    date: new Date("2014-08-20")
  },
  {
    id: 10676,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 5700,
    date: new Date("2014-08-01")
  },
  {
    id: 10677,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 1275,
    date: new Date("2014-08-22")
  },
  {
    id: 10678,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 4060,
    date: new Date("2014-08-13")
  },
  {
    id: 10679,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 2320,
    date: new Date("2014-08-18")
  },
  {
    id: 10680,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 7590,
    date: new Date("2014-08-24")
  },
  {
    id: 10681,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 4560,
    date: new Date("2014-08-20")
  },
  {
    id: 10682,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 7575,
    date: new Date("2014-08-20")
  },
  {
    id: 10683,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 700,
    date: new Date("2014-08-25")
  },
  {
    id: 10684,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 2400,
    date: new Date("2014-08-16")
  },
  {
    id: 10685,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1390,
    date: new Date("2014-08-15")
  },
  {
    id: 10686,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1320,
    date: new Date("2014-08-09")
  },
  {
    id: 10687,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 1680,
    date: new Date("2014-08-09")
  },
  {
    id: 10688,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 1500,
    date: new Date("2014-08-11")
  },
  {
    id: 10689,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 6150,
    date: new Date("2014-09-21")
  },
  {
    id: 10690,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 3675,
    date: new Date("2014-09-02")
  },
  {
    id: 10691,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 2250,
    date: new Date("2014-09-05")
  },
  {
    id: 10692,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 3585,
    date: new Date("2014-09-10")
  },
  {
    id: 10693,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 1470,
    date: new Date("2014-09-01")
  },
  {
    id: 10694,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 2260,
    date: new Date("2014-09-02")
  },
  {
    id: 10695,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 3765,
    date: new Date("2014-09-03")
  },
  {
    id: 10696,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1640,
    date: new Date("2014-09-04")
  },
  {
    id: 10697,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 4475,
    date: new Date("2014-09-09")
  },
  {
    id: 10698,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 5975,
    date: new Date("2014-09-04")
  },
  {
    id: 10699,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 1100,
    date: new Date("2014-09-16")
  },
  {
    id: 10700,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 1320,
    date: new Date("2014-09-18")
  },
  {
    id: 10701,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 8610,
    date: new Date("2014-09-19")
  },
  {
    id: 10702,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 9210,
    date: new Date("2014-09-09")
  },
  {
    id: 10703,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 3700,
    date: new Date("2014-09-01")
  },
  {
    id: 10704,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 3620,
    date: new Date("2014-09-19")
  },
  {
    id: 10705,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 4275,
    date: new Date("2014-09-01")
  },
  {
    id: 10706,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 2370,
    date: new Date("2014-09-03")
  },
  {
    id: 10707,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1870,
    date: new Date("2014-09-10")
  },
  {
    id: 10708,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 2070,
    date: new Date("2014-09-25")
  },
  {
    id: 10709,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 5025,
    date: new Date("2014-09-19")
  },
  {
    id: 10710,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 1080,
    date: new Date("2014-10-15")
  },
  {
    id: 10711,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 1400,
    date: new Date("2014-10-22")
  },
  {
    id: 10712,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 4260,
    date: new Date("2014-10-01")
  },
  {
    id: 10713,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 2745,
    date: new Date("2014-10-01")
  },
  {
    id: 10714,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2920,
    date: new Date("2014-10-23")
  },
  {
    id: 10715,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 3520,
    date: new Date("2014-10-11")
  },
  {
    id: 10716,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 4035,
    date: new Date("2014-10-20")
  },
  {
    id: 10717,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1730,
    date: new Date("2014-10-05")
  },
  {
    id: 10718,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 975,
    date: new Date("2014-10-06")
  },
  {
    id: 10719,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 5700,
    date: new Date("2014-10-06")
  },
  {
    id: 10720,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 5080,
    date: new Date("2014-10-18")
  },
  {
    id: 10721,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 2940,
    date: new Date("2014-10-24")
  },
  {
    id: 10722,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 2670,
    date: new Date("2014-10-04")
  },
  {
    id: 10723,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 1230,
    date: new Date("2014-10-11")
  },
  {
    id: 10724,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 600,
    date: new Date("2014-10-08")
  },
  {
    id: 10725,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 3700,
    date: new Date("2014-10-08")
  },
  {
    id: 10726,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 3375,
    date: new Date("2014-10-11")
  },
  {
    id: 10727,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1500,
    date: new Date("2014-10-17")
  },
  {
    id: 10728,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 370,
    date: new Date("2014-10-05")
  },
  {
    id: 10729,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2340,
    date: new Date("2014-10-16")
  },
  {
    id: 10730,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 1080,
    date: new Date("2014-10-08")
  },
  {
    id: 10731,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 2775,
    date: new Date("2014-10-21")
  },
  {
    id: 10732,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 4380,
    date: new Date("2014-11-09")
  },
  {
    id: 10733,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 5500,
    date: new Date("2014-11-21")
  },
  {
    id: 10734,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 1920,
    date: new Date("2014-11-24")
  },
  {
    id: 10735,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 765,
    date: new Date("2014-11-24")
  },
  {
    id: 10736,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 370,
    date: new Date("2014-11-18")
  },
  {
    id: 10737,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 3500,
    date: new Date("2014-11-25")
  },
  {
    id: 10738,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 825,
    date: new Date("2014-11-09")
  },
  {
    id: 10739,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 490,
    date: new Date("2014-11-23")
  },
  {
    id: 10740,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 7075,
    date: new Date("2014-11-20")
  },
  {
    id: 10741,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 1350,
    date: new Date("2014-11-25")
  },
  {
    id: 10742,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 1440,
    date: new Date("2014-11-15")
  },
  {
    id: 10743,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 2820,
    date: new Date("2014-11-13")
  },
  {
    id: 10744,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 2280,
    date: new Date("2014-11-12")
  },
  {
    id: 10745,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 1110,
    date: new Date("2014-11-03")
  },
  {
    id: 10746,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 1150,
    date: new Date("2014-11-23")
  },
  {
    id: 10747,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 2040,
    date: new Date("2014-11-20")
  },
  {
    id: 10748,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 3090,
    date: new Date("2014-11-24")
  },
  {
    id: 10749,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1940,
    date: new Date("2014-11-24")
  },
  {
    id: 10750,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 3090,
    date: new Date("2014-11-16")
  },
  {
    id: 10751,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 4900,
    date: new Date("2014-11-05")
  },
  {
    id: 10752,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 3465,
    date: new Date("2014-11-07")
  },
  {
    id: 10753,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1110,
    date: new Date("2014-11-20")
  },
  {
    id: 10754,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 1650,
    date: new Date("2014-11-02")
  },
  {
    id: 10755,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 5280,
    date: new Date("2014-12-04")
  },
  {
    id: 10756,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 3075,
    date: new Date("2014-12-02")
  },
  {
    id: 10757,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 690,
    date: new Date("2014-12-07")
  },
  {
    id: 10758,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1305,
    date: new Date("2014-12-15")
  },
  {
    id: 10759,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 1970,
    date: new Date("2014-12-01")
  },
  {
    id: 10760,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 3760,
    date: new Date("2014-12-18")
  },
  {
    id: 10761,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 1920,
    date: new Date("2014-12-22")
  },
  {
    id: 10762,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1360,
    date: new Date("2014-12-12")
  },
  {
    id: 10763,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 2525,
    date: new Date("2014-12-06")
  },
  {
    id: 10764,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 5575,
    date: new Date("2014-12-20")
  },
  {
    id: 10765,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 5560,
    date: new Date("2014-12-10")
  },
  {
    id: 10766,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 4880,
    date: new Date("2014-12-13")
  },
  {
    id: 10767,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 8850,
    date: new Date("2014-12-03")
  },
  {
    id: 10768,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 2820,
    date: new Date("2014-12-10")
  },
  {
    id: 10769,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 4000,
    date: new Date("2014-12-12")
  },
  {
    id: 10770,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 5820,
    date: new Date("2014-12-02")
  },
  {
    id: 10771,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 1275,
    date: new Date("2014-12-12")
  },
  {
    id: 10772,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1310,
    date: new Date("2014-12-01")
  },
  {
    id: 10773,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 2180,
    date: new Date("2014-12-26")
  },
  {
    id: 10774,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 4470,
    date: new Date("2014-12-17")
  },
  {
    id: 10775,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2990,
    date: new Date("2014-12-15")
  },
  {
    id: 10776,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 7650,
    date: new Date("2014-12-18")
  },
  {
    id: 10777,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 780,
    date: new Date("2014-12-02")
  },
  {
    id: 10778,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2970,
    date: new Date("2014-12-13")
  },
  {
    id: 10779,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 1155,
    date: new Date("2014-12-05")
  },
  {
    id: 10780,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 4470,
    date: new Date("2015-01-10")
  },
  {
    id: 10781,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 1125,
    date: new Date("2015-01-21")
  },
  {
    id: 10782,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 645,
    date: new Date("2015-01-17")
  },
  {
    id: 10783,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 675,
    date: new Date("2015-01-05")
  },
  {
    id: 10784,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2840,
    date: new Date("2015-01-05")
  },
  {
    id: 10785,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 2660,
    date: new Date("2015-01-04")
  },
  {
    id: 10786,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 4560,
    date: new Date("2015-01-12")
  },
  {
    id: 10787,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2880,
    date: new Date("2015-01-20")
  },
  {
    id: 10788,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 500,
    date: new Date("2015-01-02")
  },
  {
    id: 10789,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 3925,
    date: new Date("2015-01-07")
  },
  {
    id: 10790,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 5660,
    date: new Date("2015-01-18")
  },
  {
    id: 10791,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 1460,
    date: new Date("2015-01-22")
  },
  {
    id: 10792,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 5040,
    date: new Date("2015-01-10")
  },
  {
    id: 10793,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 4830,
    date: new Date("2015-01-13")
  },
  {
    id: 10794,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 3075,
    date: new Date("2015-01-22")
  },
  {
    id: 10795,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 3120,
    date: new Date("2015-01-14")
  },
  {
    id: 10796,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 3525,
    date: new Date("2015-01-23")
  },
  {
    id: 10797,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1930,
    date: new Date("2015-01-09")
  },
  {
    id: 10798,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 2890,
    date: new Date("2015-01-02")
  },
  {
    id: 10799,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 1545,
    date: new Date("2015-01-17")
  },
  {
    id: 10800,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 3630,
    date: new Date("2015-01-20")
  },
  {
    id: 10801,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 4035,
    date: new Date("2015-01-14")
  },
  {
    id: 10802,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 345,
    date: new Date("2015-01-06")
  },
  {
    id: 10803,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 7000,
    date: new Date("2015-01-07")
  },
  {
    id: 10804,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 3060,
    date: new Date("2015-02-13")
  },
  {
    id: 10805,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 6425,
    date: new Date("2015-02-04")
  },
  {
    id: 10806,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 615,
    date: new Date("2015-02-22")
  },
  {
    id: 10807,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1755,
    date: new Date("2015-02-07")
  },
  {
    id: 10808,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 1540,
    date: new Date("2015-02-21")
  },
  {
    id: 10809,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 2820,
    date: new Date("2015-02-24")
  },
  {
    id: 10810,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 4305,
    date: new Date("2015-02-10")
  },
  {
    id: 10811,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 1520,
    date: new Date("2015-02-26")
  },
  {
    id: 10812,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 4725,
    date: new Date("2015-02-18")
  },
  {
    id: 10813,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 6750,
    date: new Date("2015-02-16")
  },
  {
    id: 10814,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 5540,
    date: new Date("2015-02-07")
  },
  {
    id: 10815,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 1880,
    date: new Date("2015-02-24")
  },
  {
    id: 10816,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 6180,
    date: new Date("2015-02-26")
  },
  {
    id: 10817,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 9300,
    date: new Date("2015-02-03")
  },
  {
    id: 10818,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 3700,
    date: new Date("2015-02-26")
  },
  {
    id: 10819,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 740,
    date: new Date("2015-02-01")
  },
  {
    id: 10820,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 4755,
    date: new Date("2015-02-23")
  },
  {
    id: 10821,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 2570,
    date: new Date("2015-02-20")
  },
  {
    id: 10822,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 2860,
    date: new Date("2015-02-19")
  },
  {
    id: 10823,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 5430,
    date: new Date("2015-03-21")
  },
  {
    id: 10824,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 4525,
    date: new Date("2015-03-21")
  },
  {
    id: 10825,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 1515,
    date: new Date("2015-03-10")
  },
  {
    id: 10826,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 630,
    date: new Date("2015-03-15")
  },
  {
    id: 10827,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 1310,
    date: new Date("2015-03-01")
  },
  {
    id: 10828,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 3200,
    date: new Date("2015-03-17")
  },
  {
    id: 10829,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 3945,
    date: new Date("2015-03-20")
  },
  {
    id: 10830,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2990,
    date: new Date("2015-03-18")
  },
  {
    id: 10831,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 1125,
    date: new Date("2015-03-22")
  },
  {
    id: 10832,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 7950,
    date: new Date("2015-03-17")
  },
  {
    id: 10833,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 2960,
    date: new Date("2015-03-25")
  },
  {
    id: 10834,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 6300,
    date: new Date("2015-03-20")
  },
  {
    id: 10835,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 8670,
    date: new Date("2015-03-07")
  },
  {
    id: 10836,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 3930,
    date: new Date("2015-03-23")
  },
  {
    id: 10837,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 6975,
    date: new Date("2015-03-02")
  },
  {
    id: 10838,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 4220,
    date: new Date("2015-03-17")
  },
  {
    id: 10839,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 3090,
    date: new Date("2015-03-25")
  },
  {
    id: 10840,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 2380,
    date: new Date("2015-03-01")
  },
  {
    id: 10841,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1510,
    date: new Date("2015-03-07")
  },
  {
    id: 10842,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 1020,
    date: new Date("2015-03-19")
  },
  {
    id: 10843,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 6700,
    date: new Date("2015-03-26")
  },
  {
    id: 10844,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 4890,
    date: new Date("2015-04-02")
  },
  {
    id: 10845,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 7225,
    date: new Date("2015-04-13")
  },
  {
    id: 10846,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 795,
    date: new Date("2015-04-07")
  },
  {
    id: 10847,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1785,
    date: new Date("2015-04-03")
  },
  {
    id: 10848,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 1850,
    date: new Date("2015-04-03")
  },
  {
    id: 10849,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 5120,
    date: new Date("2015-04-12")
  },
  {
    id: 10850,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 615,
    date: new Date("2015-04-07")
  },
  {
    id: 10851,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2860,
    date: new Date("2015-04-05")
  },
  {
    id: 10852,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 1525,
    date: new Date("2015-04-24")
  },
  {
    id: 10853,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 7425,
    date: new Date("2015-04-15")
  },
  {
    id: 10854,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 6080,
    date: new Date("2015-04-13")
  },
  {
    id: 10855,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 2940,
    date: new Date("2015-04-04")
  },
  {
    id: 10856,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 5580,
    date: new Date("2015-04-16")
  },
  {
    id: 10857,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 9390,
    date: new Date("2015-04-19")
  },
  {
    id: 10858,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 3200,
    date: new Date("2015-04-26")
  },
  {
    id: 10859,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 4380,
    date: new Date("2015-04-05")
  },
  {
    id: 10860,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 4725,
    date: new Date("2015-04-06")
  },
  {
    id: 10861,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 930,
    date: new Date("2015-04-25")
  },
  {
    id: 10862,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 1910,
    date: new Date("2015-04-05")
  },
  {
    id: 10863,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 2725,
    date: new Date("2015-04-16")
  },
  {
    id: 10864,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 4720,
    date: new Date("2015-04-02")
  },
  {
    id: 10865,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 5190,
    date: new Date("2015-04-10")
  },
  {
    id: 10866,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 2800,
    date: new Date("2015-04-26")
  },
  {
    id: 10867,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 3780,
    date: new Date("2015-04-24")
  },
  {
    id: 10868,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 2340,
    date: new Date("2015-04-17")
  },
  {
    id: 10869,
    region: "North America",
    country: "United States of America",
    city: "New York",
    amount: 4830,
    date: new Date("2015-05-12")
  },
  {
    id: 10870,
    region: "North America",
    country: "United States of America",
    city: "Los Angeles",
    amount: 2075,
    date: new Date("2015-05-23")
  },
  {
    id: 10871,
    region: "North America",
    country: "United States of America",
    city: "Denver",
    amount: 3420,
    date: new Date("2015-05-21")
  },
  {
    id: 10872,
    region: "North America",
    country: "Canada",
    city: "Vancouver",
    amount: 1440,
    date: new Date("2015-05-10")
  },
  {
    id: 10873,
    region: "North America",
    country: "Canada",
    city: "Edmonton",
    amount: 1680,
    date: new Date("2015-05-15")
  },
  {
    id: 10874,
    region: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
    amount: 3440,
    date: new Date("2015-05-16")
  },
  {
    id: 10875,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 4695,
    date: new Date("2015-05-10")
  },
  {
    id: 10876,
    region: "South America",
    country: "Paraguay",
    city: "Asuncion",
    amount: 2380,
    date: new Date("2015-05-06")
  },
  {
    id: 10877,
    region: "Europe",
    country: "United Kingdom",
    city: "London",
    amount: 1875,
    date: new Date("2015-05-25")
  },
  {
    id: 10878,
    region: "Europe",
    country: "Germany",
    city: "Berlin",
    amount: 7550,
    date: new Date("2015-05-14")
  },
  {
    id: 10879,
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    amount: 3340,
    date: new Date("2015-05-01")
  },
  {
    id: 10880,
    region: "Europe",
    country: "Russian Federation",
    city: "Moscow",
    amount: 1400,
    date: new Date("2015-05-22")
  },
  {
    id: 10881,
    region: "Asia",
    country: "China",
    city: "Beijing",
    amount: 6060,
    date: new Date("2015-05-22")
  },
  {
    id: 10882,
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    amount: 8370,
    date: new Date("2015-05-13")
  },
  {
    id: 10883,
    region: "Asia",
    country: "Republic of Korea",
    city: "Seoul",
    amount: 3550,
    date: new Date("2015-05-26")
  },
  {
    id: 10884,
    region: "Australia",
    country: "Australia",
    city: "Sydney",
    amount: 2620,
    date: new Date("2015-05-17")
  },
  {
    id: 10885,
    region: "Australia",
    country: "Australia",
    city: "Melbourne",
    amount: 2400,
    date: new Date("2015-05-21")
  },
  {
    id: 10886,
    region: "Africa",
    country: "South Africa",
    city: "Pretoria",
    amount: 1740,
    date: new Date("2015-05-21")
  },
  {
    id: 10887,
    region: "Africa",
    country: "Egypt",
    city: "Cairo",
    amount: 500,
    date: new Date("2015-05-26")
  },
  {
    id: 10888,
    region: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    amount: 780,
    date: new Date("2015-05-07")
  }
];

export class Task {
  Task_ID: number;
  Task_Parent_ID: number;
  Task_Assigned_Employee_ID: number;
  Task_Completion: number;
  Task_Priority: number;
  Task_Status: string;
  Task_Subject: string;
  Task_Start_Date: string;
  Task_Due_Date: string;
  Task_Assigned_Employee?: Employee;
}

export class Employee {
  ID: number;
  Name: string;
  Picture: string;
}

export class Priority {
  id: number;
  value: string;
}

let tasks: Task[] = [
  {
    Task_ID: 1,
    Task_Assigned_Employee_ID: 1,
    Task_Subject: "Plans 2015",
    Task_Start_Date: "2015-01-01T00:00:00",
    Task_Due_Date: "2015-04-01T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 2,
    Task_Assigned_Employee_ID: 2,
    Task_Subject: "Health Insurance",
    Task_Start_Date: "2015-02-12T00:00:00",
    Task_Due_Date: "2015-05-30T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 75,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 3,
    Task_Assigned_Employee_ID: 4,
    Task_Subject: "New Brochures",
    Task_Start_Date: "2015-02-17T00:00:00",
    Task_Due_Date: "2015-03-01T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 4,
    Task_Assigned_Employee_ID: 31,
    Task_Subject: "Training",
    Task_Start_Date: "2015-03-02T00:00:00",
    Task_Due_Date: "2015-06-29T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 5,
    Task_Assigned_Employee_ID: 5,
    Task_Subject: "NDA",
    Task_Start_Date: "2015-03-12T00:00:00",
    Task_Due_Date: "2015-05-01T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 3,
    Task_Completion: 90,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 6,
    Task_Assigned_Employee_ID: 7,
    Task_Subject: "Revenue Projections",
    Task_Start_Date: "2015-03-24T00:00:00",
    Task_Due_Date: "2015-04-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 7,
    Task_Assigned_Employee_ID: 9,
    Task_Subject: "TV Recall",
    Task_Start_Date: "2015-04-18T00:00:00",
    Task_Due_Date: "2016-02-04T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 90,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 8,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Overtime",
    Task_Start_Date: "2015-06-10T00:00:00",
    Task_Due_Date: "2015-06-20T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 9,
    Task_Assigned_Employee_ID: 8,
    Task_Subject: "Recall and Refund Forms",
    Task_Start_Date: "2015-06-17T00:00:00",
    Task_Due_Date: "2016-04-09T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 10,
    Task_Assigned_Employee_ID: 10,
    Task_Subject: "Shippers",
    Task_Start_Date: "2015-07-10T00:00:00",
    Task_Due_Date: "2016-04-11T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 11,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Hardware Upgrade",
    Task_Start_Date: "2015-07-22T00:00:00",
    Task_Due_Date: "2016-05-01T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 3,
    Task_Completion: 95,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 12,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Touch-Enabled Apps",
    Task_Start_Date: "2015-08-05T00:00:00",
    Task_Due_Date: "2016-04-30T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 90,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 13,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Online Sales",
    Task_Start_Date: "2015-08-20T00:00:00",
    Task_Due_Date: "2015-09-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 14,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "New Website Design",
    Task_Start_Date: "2015-09-17T00:00:00",
    Task_Due_Date: "2015-11-01T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 15,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Bandwidth Increase",
    Task_Start_Date: "2015-11-01T00:00:00",
    Task_Due_Date: "2015-11-07T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 16,
    Task_Assigned_Employee_ID: 18,
    Task_Subject: "Support",
    Task_Start_Date: "2015-11-10T00:00:00",
    Task_Due_Date: "2015-11-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 17,
    Task_Assigned_Employee_ID: 31,
    Task_Subject: "Training Material",
    Task_Start_Date: "2015-11-14T00:00:00",
    Task_Due_Date: "2016-02-05T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 18,
    Task_Assigned_Employee_ID: 22,
    Task_Subject: "New Database",
    Task_Start_Date: "2015-12-24T00:00:00",
    Task_Due_Date: "2015-12-29T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 95,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 19,
    Task_Assigned_Employee_ID: 32,
    Task_Subject: "New HDMI Specification",
    Task_Start_Date: "2016-01-02T00:00:00",
    Task_Due_Date: "2016-01-31T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 2,
    Task_Completion: 50,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 20,
    Task_Assigned_Employee_ID: 3,
    Task_Subject: "Automation Server",
    Task_Start_Date: "2016-01-15T00:00:00",
    Task_Due_Date: "2016-04-30T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 3,
    Task_Completion: 85,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 21,
    Task_Assigned_Employee_ID: 40,
    Task_Subject: "Retail Sales",
    Task_Start_Date: "2016-01-20T00:00:00",
    Task_Due_Date: "2016-02-10T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 22,
    Task_Assigned_Employee_ID: 1,
    Task_Subject: "Reports",
    Task_Start_Date: "2016-03-13T00:00:00",
    Task_Due_Date: "2016-05-07T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 50,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 23,
    Task_Assigned_Employee_ID: 5,
    Task_Subject: "Budget",
    Task_Start_Date: "2016-03-20T00:00:00",
    Task_Due_Date: "2016-04-01T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 30,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 24,
    Task_Assigned_Employee_ID: 13,
    Task_Subject: "Shipping Labels",
    Task_Start_Date: "2016-04-01T00:00:00",
    Task_Due_Date: "2016-04-15T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 50,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 25,
    Task_Assigned_Employee_ID: 10,
    Task_Subject: "New Warehouse",
    Task_Start_Date: "2016-04-05T00:00:00",
    Task_Due_Date: "2016-04-15T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 65,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 26,
    Task_Assigned_Employee_ID: 10,
    Task_Subject: "Forklift",
    Task_Start_Date: "2016-04-07T00:00:00",
    Task_Due_Date: "2016-04-20T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 20,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 27,
    Task_Assigned_Employee_ID: 1,
    Task_Subject: "Customer Follow Up Plan",
    Task_Start_Date: "2016-05-05T00:00:00",
    Task_Due_Date: "2016-05-11T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 40,
    Task_Parent_ID: 0
  },
  {
    Task_ID: 28,
    Task_Assigned_Employee_ID: 7,
    Task_Subject: "Prepare 2015 Financial",
    Task_Start_Date: "2015-01-15T00:00:00",
    Task_Due_Date: "2015-01-31T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 1
  },
  {
    Task_ID: 29,
    Task_Assigned_Employee_ID: 4,
    Task_Subject: "Prepare 2015 Marketing Plan",
    Task_Start_Date: "2015-01-01T00:00:00",
    Task_Due_Date: "2015-01-31T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 1
  },
  {
    Task_ID: 30,
    Task_Assigned_Employee_ID: 2,
    Task_Subject:
      "Review Health Insurance Options Under the Affordable Care Act",
    Task_Start_Date: "2015-02-12T00:00:00",
    Task_Due_Date: "2015-04-25T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 50,
    Task_Parent_ID: 2
  },
  {
    Task_ID: 31,
    Task_Assigned_Employee_ID: 1,
    Task_Subject: "Choose between PPO and HMO Health Plan",
    Task_Start_Date: "2015-02-15T00:00:00",
    Task_Due_Date: "2015-04-15T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 75,
    Task_Parent_ID: 2
  },
  {
    Task_ID: 32,
    Task_Assigned_Employee_ID: 1,
    Task_Subject: "Google AdWords Strategy",
    Task_Start_Date: "2015-02-16T00:00:00",
    Task_Due_Date: "2015-02-28T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 29
  },
  {
    Task_ID: 34,
    Task_Assigned_Employee_ID: 28,
    Task_Subject: "2015 Brochure Designs",
    Task_Start_Date: "2015-02-19T00:00:00",
    Task_Due_Date: "2015-02-24T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 3
  },
  {
    Task_ID: 35,
    Task_Assigned_Employee_ID: 29,
    Task_Subject: "Brochure Design Review",
    Task_Start_Date: "2015-02-19T00:00:00",
    Task_Due_Date: "2015-02-22T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 34
  },
  {
    Task_ID: 36,
    Task_Assigned_Employee_ID: 29,
    Task_Subject: "Website Re-Design Plan",
    Task_Start_Date: "2015-02-19T00:00:00",
    Task_Due_Date: "2015-02-24T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 34
  },
  {
    Task_ID: 37,
    Task_Assigned_Employee_ID: 4,
    Task_Subject: "Rollout of New Website and Marketing Brochures",
    Task_Start_Date: "2015-02-20T00:00:00",
    Task_Due_Date: "2015-02-28T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 3
  },
  {
    Task_ID: 38,
    Task_Assigned_Employee_ID: 8,
    Task_Subject: "Update Sales Strategy Documents",
    Task_Start_Date: "2015-02-20T00:00:00",
    Task_Due_Date: "2015-02-22T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 29
  },
  {
    Task_ID: 39,
    Task_Assigned_Employee_ID: 41,
    Task_Subject: "Create 2012 Sales Report",
    Task_Start_Date: "2015-02-20T00:00:00",
    Task_Due_Date: "2015-02-21T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 29
  },
  {
    Task_ID: 40,
    Task_Assigned_Employee_ID: 42,
    Task_Subject: "Direct vs Online Sales Comparison Report",
    Task_Start_Date: "2015-02-20T00:00:00",
    Task_Due_Date: "2015-02-22T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 29
  },
  {
    Task_ID: 41,
    Task_Assigned_Employee_ID: 4,
    Task_Subject: "Review 2012 Sales Report and Approve 2015 Plans",
    Task_Start_Date: "2015-02-23T00:00:00",
    Task_Due_Date: "2015-02-28T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 29
  },
  {
    Task_ID: 42,
    Task_Assigned_Employee_ID: 3,
    Task_Subject: "Deliver R&D Plans for 2015",
    Task_Start_Date: "2015-03-01T00:00:00",
    Task_Due_Date: "2015-03-10T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 1
  },
  {
    Task_ID: 43,
    Task_Assigned_Employee_ID: 32,
    Task_Subject: "Create 2015 R&D Plans",
    Task_Start_Date: "2015-03-01T00:00:00",
    Task_Due_Date: "2015-03-07T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 42
  },
  {
    Task_ID: 44,
    Task_Assigned_Employee_ID: 33,
    Task_Subject: "2015 QA Strategy Report",
    Task_Start_Date: "2015-03-02T00:00:00",
    Task_Due_Date: "2015-03-05T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 42
  },
  {
    Task_ID: 45,
    Task_Assigned_Employee_ID: 31,
    Task_Subject: "2015 Training Events",
    Task_Start_Date: "2015-03-02T00:00:00",
    Task_Due_Date: "2015-03-04T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 4
  },
  {
    Task_ID: 46,
    Task_Assigned_Employee_ID: 2,
    Task_Subject: "Non-Compete Agreements",
    Task_Start_Date: "2015-03-12T00:00:00",
    Task_Due_Date: "2015-03-14T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 1,
    Task_Completion: 100,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 47,
    Task_Assigned_Employee_ID: 1,
    Task_Subject: "Update NDA Agreement",
    Task_Start_Date: "2015-03-14T00:00:00",
    Task_Due_Date: "2015-03-16T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 48,
    Task_Assigned_Employee_ID: 5,
    Task_Subject: "Update Employee Files with New NDA",
    Task_Start_Date: "2015-03-16T00:00:00",
    Task_Due_Date: "2015-03-26T00:00:00",
    Task_Status: "Need Assistance",
    Task_Priority: 2,
    Task_Completion: 90,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 49,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Sign Updated NDA",
    Task_Start_Date: "2015-03-20T00:00:00",
    Task_Due_Date: "2015-03-25T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 50,
    Task_Assigned_Employee_ID: 7,
    Task_Subject: "Sign Updated NDA",
    Task_Start_Date: "2015-03-20T00:00:00",
    Task_Due_Date: "2015-03-25T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 51,
    Task_Assigned_Employee_ID: 8,
    Task_Subject: "Sign Updated NDA",
    Task_Start_Date: "2015-03-20T00:00:00",
    Task_Due_Date: "2015-03-25T00:00:00",
    Task_Status: "Need Assistance",
    Task_Priority: 3,
    Task_Completion: 25,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 52,
    Task_Assigned_Employee_ID: 9,
    Task_Subject: "Sign Updated NDA",
    Task_Start_Date: "2015-03-20T00:00:00",
    Task_Due_Date: "2015-03-25T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 53,
    Task_Assigned_Employee_ID: 17,
    Task_Subject: "Submit Questions Regarding New NDA",
    Task_Start_Date: "2015-03-21T00:00:00",
    Task_Due_Date: "2015-03-24T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 54,
    Task_Assigned_Employee_ID: 18,
    Task_Subject: "Submit Questions Regarding New NDA",
    Task_Start_Date: "2015-03-21T00:00:00",
    Task_Due_Date: "2015-03-24T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 55,
    Task_Assigned_Employee_ID: 19,
    Task_Subject: "Submit Questions Regarding New NDA",
    Task_Start_Date: "2015-03-21T00:00:00",
    Task_Due_Date: "2015-03-24T00:00:00",
    Task_Status: "Need Assistance",
    Task_Priority: 4,
    Task_Completion: 25,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 56,
    Task_Assigned_Employee_ID: 14,
    Task_Subject: "Submit Signed NDA",
    Task_Start_Date: "2015-03-22T00:00:00",
    Task_Due_Date: "2015-03-24T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 57,
    Task_Assigned_Employee_ID: 13,
    Task_Subject: "Submit Signed NDA",
    Task_Start_Date: "2015-03-22T00:00:00",
    Task_Due_Date: "2015-03-24T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 58,
    Task_Assigned_Employee_ID: 15,
    Task_Subject: "Submit Signed NDA",
    Task_Start_Date: "2015-03-22T00:00:00",
    Task_Due_Date: "2015-03-24T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 59,
    Task_Assigned_Employee_ID: 16,
    Task_Subject: "Submit Signed NDA",
    Task_Start_Date: "2015-03-22T00:00:00",
    Task_Due_Date: "2015-03-24T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 5
  },
  {
    Task_ID: 60,
    Task_Assigned_Employee_ID: 7,
    Task_Subject: "Update Revenue Projections",
    Task_Start_Date: "2015-03-24T00:00:00",
    Task_Due_Date: "2015-04-07T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 6
  },
  {
    Task_ID: 61,
    Task_Assigned_Employee_ID: 8,
    Task_Subject: "Review Revenue Projections",
    Task_Start_Date: "2015-03-25T00:00:00",
    Task_Due_Date: "2015-04-06T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 6
  },
  {
    Task_ID: 62,
    Task_Assigned_Employee_ID: 41,
    Task_Subject: "Comment on Revenue Projections",
    Task_Start_Date: "2015-03-25T00:00:00",
    Task_Due_Date: "2015-04-03T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 6
  },
  {
    Task_ID: 63,
    Task_Assigned_Employee_ID: 42,
    Task_Subject: "Comment on Revenue Projections",
    Task_Start_Date: "2015-03-25T00:00:00",
    Task_Due_Date: "2015-04-03T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 6
  },
  {
    Task_ID: 64,
    Task_Assigned_Employee_ID: 45,
    Task_Subject: "Comment on Revenue Projections",
    Task_Start_Date: "2015-03-25T00:00:00",
    Task_Due_Date: "2015-04-03T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 3,
    Task_Completion: 25,
    Task_Parent_ID: 6
  },
  {
    Task_ID: 65,
    Task_Assigned_Employee_ID: 5,
    Task_Subject: "Provide New Health Insurance Docs",
    Task_Start_Date: "2015-03-28T00:00:00",
    Task_Due_Date: "2015-04-07T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 2
  },
  {
    Task_ID: 66,
    Task_Assigned_Employee_ID: 10,
    Task_Subject: "Review Changes to Health Insurance Coverage",
    Task_Start_Date: "2015-04-07T00:00:00",
    Task_Due_Date: "2015-04-30T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 2
  },
  {
    Task_ID: 67,
    Task_Assigned_Employee_ID: 14,
    Task_Subject: "Scan Health Insurance Forms",
    Task_Start_Date: "2015-04-15T00:00:00",
    Task_Due_Date: "2015-04-20T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 2
  },
  {
    Task_ID: 68,
    Task_Assigned_Employee_ID: 15,
    Task_Subject: "Sign Health Insurance Forms",
    Task_Start_Date: "2015-04-16T00:00:00",
    Task_Due_Date: "2015-04-19T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 2
  },
  {
    Task_ID: 69,
    Task_Assigned_Employee_ID: 13,
    Task_Subject: "Sign Health Insurance Forms",
    Task_Start_Date: "2015-04-16T00:00:00",
    Task_Due_Date: "2015-04-19T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 2
  },
  {
    Task_ID: 70,
    Task_Assigned_Employee_ID: 16,
    Task_Subject: "Sign Health Insurance Forms",
    Task_Start_Date: "2015-04-16T00:00:00",
    Task_Due_Date: "2015-04-19T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 2
  },
  {
    Task_ID: 71,
    Task_Assigned_Employee_ID: 18,
    Task_Subject: "Follow up with West Coast Stores",
    Task_Start_Date: "2015-04-18T00:00:00",
    Task_Due_Date: "2016-02-04T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 3,
    Task_Completion: 95,
    Task_Parent_ID: 7
  },
  {
    Task_ID: 72,
    Task_Assigned_Employee_ID: 17,
    Task_Subject: "Follow up with East Coast Stores",
    Task_Start_Date: "2015-04-18T00:00:00",
    Task_Due_Date: "2016-01-04T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 3,
    Task_Completion: 85,
    Task_Parent_ID: 7
  },
  {
    Task_ID: 73,
    Task_Assigned_Employee_ID: 19,
    Task_Subject: "Send Email to Customers about Recall",
    Task_Start_Date: "2015-04-18T00:00:00",
    Task_Due_Date: "2015-04-30T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 7
  },
  {
    Task_ID: 74,
    Task_Assigned_Employee_ID: 9,
    Task_Subject: "Submit Refund Report for 2015 Recall",
    Task_Start_Date: "2015-04-25T00:00:00",
    Task_Due_Date: "2015-05-05T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 7
  },
  {
    Task_ID: 75,
    Task_Assigned_Employee_ID: 2,
    Task_Subject: "Give Final Approval for Refunds",
    Task_Start_Date: "2015-05-05T00:00:00",
    Task_Due_Date: "2015-05-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 7
  },
  {
    Task_ID: 76,
    Task_Assigned_Employee_ID: 32,
    Task_Subject: "Prepare Product Recall Report",
    Task_Start_Date: "2015-05-10T00:00:00",
    Task_Due_Date: "2015-05-16T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 7
  },
  {
    Task_ID: 77,
    Task_Assigned_Employee_ID: 1,
    Task_Subject: "Review Product Recall Report by Engineering Team",
    Task_Start_Date: "2015-05-17T00:00:00",
    Task_Due_Date: "2015-05-20T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 7
  },
  {
    Task_ID: 78,
    Task_Assigned_Employee_ID: 31,
    Task_Subject: "Create Training Course for New TVs",
    Task_Start_Date: "2015-05-29T00:00:00",
    Task_Due_Date: "2015-06-29T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 4
  },
  {
    Task_ID: 79,
    Task_Assigned_Employee_ID: 33,
    Task_Subject: "Review Training Course for any Ommissions",
    Task_Start_Date: "2015-06-01T00:00:00",
    Task_Due_Date: "2015-06-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 4
  },
  {
    Task_ID: 80,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Review Overtime Report",
    Task_Start_Date: "2015-06-10T00:00:00",
    Task_Due_Date: "2015-06-14T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 8
  },
  {
    Task_ID: 81,
    Task_Assigned_Employee_ID: 21,
    Task_Subject: "Submit Overtime Request Forms",
    Task_Start_Date: "2015-06-11T00:00:00",
    Task_Due_Date: "2015-06-12T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 8
  },
  {
    Task_ID: 82,
    Task_Assigned_Employee_ID: 22,
    Task_Subject: "Submit Overtime Request Forms",
    Task_Start_Date: "2015-06-11T00:00:00",
    Task_Due_Date: "2015-06-12T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 8
  },
  {
    Task_ID: 83,
    Task_Assigned_Employee_ID: 23,
    Task_Subject: "Submit Overtime Request Forms",
    Task_Start_Date: "2015-06-11T00:00:00",
    Task_Due_Date: "2015-06-12T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 8
  },
  {
    Task_ID: 84,
    Task_Assigned_Employee_ID: 2,
    Task_Subject: "Overtime Approval Guidelines",
    Task_Start_Date: "2015-06-15T00:00:00",
    Task_Due_Date: "2015-06-20T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 8
  },
  {
    Task_ID: 85,
    Task_Assigned_Employee_ID: 8,
    Task_Subject: "Refund Request Template",
    Task_Start_Date: "2015-06-17T00:00:00",
    Task_Due_Date: "2016-04-01T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 2,
    Task_Completion: 0,
    Task_Parent_ID: 9
  },
  {
    Task_ID: 86,
    Task_Assigned_Employee_ID: 8,
    Task_Subject: "Recall Rebate Form",
    Task_Start_Date: "2015-06-17T00:00:00",
    Task_Due_Date: "2016-04-01T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 2,
    Task_Completion: 0,
    Task_Parent_ID: 9
  },
  {
    Task_ID: 87,
    Task_Assigned_Employee_ID: 12,
    Task_Subject: "Create Report on Customer Feedback",
    Task_Start_Date: "2015-06-20T00:00:00",
    Task_Due_Date: "2015-06-30T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 9
  },
  {
    Task_ID: 88,
    Task_Assigned_Employee_ID: 8,
    Task_Subject: "Review Customer Feedback Report",
    Task_Start_Date: "2015-06-30T00:00:00",
    Task_Due_Date: "2015-07-03T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 9
  },
  {
    Task_ID: 89,
    Task_Assigned_Employee_ID: 1,
    Task_Subject: "Customer Feedback Report Analysis",
    Task_Start_Date: "2015-07-05T00:00:00",
    Task_Due_Date: "2016-04-09T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 2,
    Task_Completion: 0,
    Task_Parent_ID: 9
  },
  {
    Task_ID: 90,
    Task_Assigned_Employee_ID: 10,
    Task_Subject: "Prepare Shipping Cost Analysis Report",
    Task_Start_Date: "2015-07-10T00:00:00",
    Task_Due_Date: "2015-07-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 10
  },
  {
    Task_ID: 91,
    Task_Assigned_Employee_ID: 13,
    Task_Subject: "Provide Feedback on Shippers",
    Task_Start_Date: "2015-07-11T00:00:00",
    Task_Due_Date: "2015-07-14T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 10
  },
  {
    Task_ID: 92,
    Task_Assigned_Employee_ID: 15,
    Task_Subject: "Provide Feedback on Shippers",
    Task_Start_Date: "2015-07-11T00:00:00",
    Task_Due_Date: "2015-07-14T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 10
  },
  {
    Task_ID: 93,
    Task_Assigned_Employee_ID: 16,
    Task_Subject: "Provide Feedback on Shippers",
    Task_Start_Date: "2015-07-11T00:00:00",
    Task_Due_Date: "2015-07-14T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 10
  },
  {
    Task_ID: 94,
    Task_Assigned_Employee_ID: 2,
    Task_Subject: "Select Preferred Shipper",
    Task_Start_Date: "2015-07-16T00:00:00",
    Task_Due_Date: "2015-07-20T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 10
  },
  {
    Task_ID: 95,
    Task_Assigned_Employee_ID: 1,
    Task_Subject: "Complete Shipper Selection Form",
    Task_Start_Date: "2015-07-21T00:00:00",
    Task_Due_Date: "2016-04-11T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 4,
    Task_Completion: 0,
    Task_Parent_ID: 10
  },
  {
    Task_ID: 96,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Upgrade Server Hardware",
    Task_Start_Date: "2015-07-22T00:00:00",
    Task_Due_Date: "2015-07-31T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 11
  },
  {
    Task_ID: 97,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Upgrade Personal Computers",
    Task_Start_Date: "2015-07-24T00:00:00",
    Task_Due_Date: "2016-04-30T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 85,
    Task_Parent_ID: 11
  },
  {
    Task_ID: 98,
    Task_Assigned_Employee_ID: 2,
    Task_Subject: "Approve Personal Computer Upgrade Plan",
    Task_Start_Date: "2015-07-24T00:00:00",
    Task_Due_Date: "2015-07-31T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 11
  },
  {
    Task_ID: 99,
    Task_Assigned_Employee_ID: 3,
    Task_Subject: "Decide on Mobile Devices to Use in the Field",
    Task_Start_Date: "2015-07-30T00:00:00",
    Task_Due_Date: "2015-08-02T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 11
  },
  {
    Task_ID: 100,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Upgrade Apps to Windows RT or stay with WinForms",
    Task_Start_Date: "2015-08-01T00:00:00",
    Task_Due_Date: "2015-08-05T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 12
  },
  {
    Task_ID: 101,
    Task_Assigned_Employee_ID: 25,
    Task_Subject: "Estimate Time Required to Touch-Enable Apps",
    Task_Start_Date: "2015-08-05T00:00:00",
    Task_Due_Date: "2015-08-07T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 12
  },
  {
    Task_ID: 102,
    Task_Assigned_Employee_ID: 23,
    Task_Subject: "Report on Tranistion to Touch-Based Apps",
    Task_Start_Date: "2015-08-10T00:00:00",
    Task_Due_Date: "2015-08-11T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 12
  },
  {
    Task_ID: 103,
    Task_Assigned_Employee_ID: 3,
    Task_Subject: "Try New Touch-Enabled WinForms Apps",
    Task_Start_Date: "2015-08-11T00:00:00",
    Task_Due_Date: "2015-08-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 12
  },
  {
    Task_ID: 104,
    Task_Assigned_Employee_ID: 24,
    Task_Subject: "Rollout New Touch-Enabled WinForms Apps",
    Task_Start_Date: "2015-08-17T00:00:00",
    Task_Due_Date: "2016-04-30T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 75,
    Task_Parent_ID: 12
  },
  {
    Task_ID: 105,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Site Up-Time Report",
    Task_Start_Date: "2015-08-20T00:00:00",
    Task_Due_Date: "2015-08-24T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 13
  },
  {
    Task_ID: 106,
    Task_Assigned_Employee_ID: 4,
    Task_Subject: "Review Site Up-Time Report",
    Task_Start_Date: "2015-08-24T00:00:00",
    Task_Due_Date: "2015-08-30T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 13
  },
  {
    Task_ID: 107,
    Task_Assigned_Employee_ID: 1,
    Task_Subject: "Review Online Sales Report",
    Task_Start_Date: "2015-08-30T00:00:00",
    Task_Due_Date: "2015-09-04T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 13
  },
  {
    Task_ID: 108,
    Task_Assigned_Employee_ID: 8,
    Task_Subject: "Determine New Online Marketing Strategy",
    Task_Start_Date: "2015-09-03T00:00:00",
    Task_Due_Date: "2015-09-10T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 13
  },
  {
    Task_ID: 109,
    Task_Assigned_Employee_ID: 42,
    Task_Subject: "New Online Marketing Strategy",
    Task_Start_Date: "2015-09-05T00:00:00",
    Task_Due_Date: "2015-09-11T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 13
  },
  {
    Task_ID: 110,
    Task_Assigned_Employee_ID: 4,
    Task_Subject: "Approve New Online Marketing Strategy",
    Task_Start_Date: "2015-09-15T00:00:00",
    Task_Due_Date: "2015-09-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 13
  },
  {
    Task_ID: 111,
    Task_Assigned_Employee_ID: 28,
    Task_Subject: "Submit New Website Design",
    Task_Start_Date: "2015-09-17T00:00:00",
    Task_Due_Date: "2015-09-22T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 14
  },
  {
    Task_ID: 112,
    Task_Assigned_Employee_ID: 29,
    Task_Subject: "Create Icons for Website",
    Task_Start_Date: "2015-09-17T00:00:00",
    Task_Due_Date: "2015-09-21T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 111
  },
  {
    Task_ID: 113,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Review PSDs for New Website",
    Task_Start_Date: "2015-09-23T00:00:00",
    Task_Due_Date: "2015-10-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 111
  },
  {
    Task_ID: 114,
    Task_Assigned_Employee_ID: 24,
    Task_Subject: "Create New Shopping Cart",
    Task_Start_Date: "2015-09-24T00:00:00",
    Task_Due_Date: "2015-10-01T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 113
  },
  {
    Task_ID: 115,
    Task_Assigned_Employee_ID: 25,
    Task_Subject: "Create New Product Pages",
    Task_Start_Date: "2015-09-24T00:00:00",
    Task_Due_Date: "2015-10-04T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 113
  },
  {
    Task_ID: 116,
    Task_Assigned_Employee_ID: 8,
    Task_Subject: "Review New Product Pages",
    Task_Start_Date: "2015-10-04T00:00:00",
    Task_Due_Date: "2015-10-10T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 113
  },
  {
    Task_ID: 117,
    Task_Assigned_Employee_ID: 4,
    Task_Subject: "Approve Website Launch",
    Task_Start_Date: "2015-10-10T00:00:00",
    Task_Due_Date: "2015-10-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 113
  },
  {
    Task_ID: 118,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Launch New Website",
    Task_Start_Date: "2015-10-15T00:00:00",
    Task_Due_Date: "2015-10-16T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 111
  },
  {
    Task_ID: 119,
    Task_Assigned_Employee_ID: 14,
    Task_Subject: "Update Customer Shipping Profiles",
    Task_Start_Date: "2015-10-20T00:00:00",
    Task_Due_Date: "2015-10-22T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 14
  },
  {
    Task_ID: 120,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Create New Shipping Return Labels",
    Task_Start_Date: "2015-10-21T00:00:00",
    Task_Due_Date: "2015-10-30T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 119
  },
  {
    Task_ID: 121,
    Task_Assigned_Employee_ID: 23,
    Task_Subject: "Get Design for Shipping Return Labels",
    Task_Start_Date: "2015-10-21T00:00:00",
    Task_Due_Date: "2015-10-30T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 119
  },
  {
    Task_ID: 122,
    Task_Assigned_Employee_ID: 29,
    Task_Subject: "PSD needed for Shipping Return Labels",
    Task_Start_Date: "2015-10-22T00:00:00",
    Task_Due_Date: "2015-10-27T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 119
  },
  {
    Task_ID: 123,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Request Bandwidth Increase from ISP",
    Task_Start_Date: "2015-11-01T00:00:00",
    Task_Due_Date: "2015-11-05T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 15
  },
  {
    Task_ID: 124,
    Task_Assigned_Employee_ID: 7,
    Task_Subject: "Submit D&B Number to ISP for Credit Approval",
    Task_Start_Date: "2015-11-04T00:00:00",
    Task_Due_Date: "2015-11-07T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 15
  },
  {
    Task_ID: 125,
    Task_Assigned_Employee_ID: 2,
    Task_Subject: "Contact ISP and Discuss Payment Options",
    Task_Start_Date: "2015-11-05T00:00:00",
    Task_Due_Date: "2015-11-06T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 15
  },
  {
    Task_ID: 126,
    Task_Assigned_Employee_ID: 18,
    Task_Subject: "Prepare Year-End Support Summary Report",
    Task_Start_Date: "2015-11-10T00:00:00",
    Task_Due_Date: "2015-11-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 16
  },
  {
    Task_ID: 127,
    Task_Assigned_Employee_ID: 19,
    Task_Subject: "Analyze Support Traffic for 2015",
    Task_Start_Date: "2015-11-11T00:00:00",
    Task_Due_Date: "2015-11-14T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 16
  },
  {
    Task_ID: 128,
    Task_Assigned_Employee_ID: 33,
    Task_Subject: "Review New Training Material",
    Task_Start_Date: "2015-11-14T00:00:00",
    Task_Due_Date: "2015-11-18T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 17
  },
  {
    Task_ID: 129,
    Task_Assigned_Employee_ID: 31,
    Task_Subject: "Distribute Training Material to Support Staff",
    Task_Start_Date: "2015-11-18T00:00:00",
    Task_Due_Date: "2015-11-30T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 17
  },
  {
    Task_ID: 130,
    Task_Assigned_Employee_ID: 9,
    Task_Subject: "Training Material Distribution Schedule",
    Task_Start_Date: "2015-11-30T00:00:00",
    Task_Due_Date: "2015-12-02T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 17
  },
  {
    Task_ID: 131,
    Task_Assigned_Employee_ID: 28,
    Task_Subject: "Provide New Artwork to Support Team",
    Task_Start_Date: "2015-12-03T00:00:00",
    Task_Due_Date: "2015-12-04T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 17
  },
  {
    Task_ID: 132,
    Task_Assigned_Employee_ID: 29,
    Task_Subject: "Publish New Art on the Server",
    Task_Start_Date: "2015-12-03T00:00:00",
    Task_Due_Date: "2015-12-04T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 131
  },
  {
    Task_ID: 133,
    Task_Assigned_Employee_ID: 12,
    Task_Subject: "Replace Old Artwork with New Artwork",
    Task_Start_Date: "2015-12-07T00:00:00",
    Task_Due_Date: "2015-12-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 131
  },
  {
    Task_ID: 134,
    Task_Assigned_Employee_ID: 20,
    Task_Subject: "Replace Old Artwork with New Artwork",
    Task_Start_Date: "2015-12-07T00:00:00",
    Task_Due_Date: "2015-12-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 131
  },
  {
    Task_ID: 135,
    Task_Assigned_Employee_ID: 40,
    Task_Subject: "Replace Old Artwork with New Artwork",
    Task_Start_Date: "2015-12-07T00:00:00",
    Task_Due_Date: "2015-12-15T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 131
  },
  {
    Task_ID: 136,
    Task_Assigned_Employee_ID: 8,
    Task_Subject: "Ship New Brochures to Field",
    Task_Start_Date: "2015-12-19T00:00:00",
    Task_Due_Date: "2015-12-31T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 17
  },
  {
    Task_ID: 137,
    Task_Assigned_Employee_ID: 14,
    Task_Subject: "Ship Brochures to Todd Hoffman",
    Task_Start_Date: "2015-12-23T00:00:00",
    Task_Due_Date: "2015-12-31T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 17
  },
  {
    Task_ID: 138,
    Task_Assigned_Employee_ID: 22,
    Task_Subject: "Update Server with Service Packs",
    Task_Start_Date: "2015-12-24T00:00:00",
    Task_Due_Date: "2015-12-24T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 18
  },
  {
    Task_ID: 139,
    Task_Assigned_Employee_ID: 22,
    Task_Subject: "Install New Database",
    Task_Start_Date: "2015-12-27T00:00:00",
    Task_Due_Date: "2015-12-28T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 18
  },
  {
    Task_ID: 140,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Approve Overtime for HR",
    Task_Start_Date: "2015-12-29T00:00:00",
    Task_Due_Date: "2015-12-29T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 18
  },
  {
    Task_ID: 141,
    Task_Assigned_Employee_ID: 32,
    Task_Subject: "Review New HDMI Specification",
    Task_Start_Date: "2016-01-02T00:00:00",
    Task_Due_Date: "2016-01-31T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 2,
    Task_Completion: 50,
    Task_Parent_ID: 19
  },
  {
    Task_ID: 142,
    Task_Assigned_Employee_ID: 3,
    Task_Subject: "Approval on Converting to New HDMI Specification",
    Task_Start_Date: "2016-01-11T00:00:00",
    Task_Due_Date: "2016-01-31T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 2,
    Task_Completion: 75,
    Task_Parent_ID: 19
  },
  {
    Task_ID: 143,
    Task_Assigned_Employee_ID: 24,
    Task_Subject: "Create New Spike for Automation Server",
    Task_Start_Date: "2016-01-15T00:00:00",
    Task_Due_Date: "2016-01-27T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 20
  },
  {
    Task_ID: 144,
    Task_Assigned_Employee_ID: 41,
    Task_Subject: "Report on Retail Sales Strategy for 2016",
    Task_Start_Date: "2016-01-20T00:00:00",
    Task_Due_Date: "2016-01-31T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 21
  },
  {
    Task_ID: 145,
    Task_Assigned_Employee_ID: 25,
    Task_Subject: "Code Review - New Automation Server",
    Task_Start_Date: "2016-01-27T00:00:00",
    Task_Due_Date: "2016-02-15T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 75,
    Task_Parent_ID: 20
  },
  {
    Task_ID: 146,
    Task_Assigned_Employee_ID: 17,
    Task_Subject: "Feedback on New Training Course",
    Task_Start_Date: "2016-01-28T00:00:00",
    Task_Due_Date: "2016-02-05T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 17
  },
  {
    Task_ID: 147,
    Task_Assigned_Employee_ID: 10,
    Task_Subject: "Send Monthly Invoices from Shippers",
    Task_Start_Date: "2016-02-01T00:00:00",
    Task_Due_Date: "2016-02-07T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 10
  },
  {
    Task_ID: 148,
    Task_Assigned_Employee_ID: 40,
    Task_Subject: "Schedule Meeting with Sales Team",
    Task_Start_Date: "2016-02-07T00:00:00",
    Task_Due_Date: "2016-02-09T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 21
  },
  {
    Task_ID: 149,
    Task_Assigned_Employee_ID: 42,
    Task_Subject: "Confirm Availability for Sales Meeting",
    Task_Start_Date: "2016-02-09T00:00:00",
    Task_Due_Date: "2016-02-09T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 21
  },
  {
    Task_ID: 150,
    Task_Assigned_Employee_ID: 39,
    Task_Subject: "Reschedule Sales Team Meeting",
    Task_Start_Date: "2016-02-10T00:00:00",
    Task_Due_Date: "2016-02-10T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 21
  },
  {
    Task_ID: 151,
    Task_Assigned_Employee_ID: 45,
    Task_Subject: "Update Database with New Leads",
    Task_Start_Date: "2016-03-01T00:00:00",
    Task_Due_Date: "2016-03-10T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 80,
    Task_Parent_ID: 18
  },
  {
    Task_ID: 152,
    Task_Assigned_Employee_ID: 12,
    Task_Subject: "Send Territory Sales Breakdown",
    Task_Start_Date: "2016-03-13T00:00:00",
    Task_Due_Date: "2016-03-16T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 50,
    Task_Parent_ID: 22
  },
  {
    Task_ID: 153,
    Task_Assigned_Employee_ID: 41,
    Task_Subject: "Territory Sales Breakdown Report",
    Task_Start_Date: "2016-03-17T00:00:00",
    Task_Due_Date: "2016-03-17T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 3,
    Task_Completion: 50,
    Task_Parent_ID: 22
  },
  {
    Task_ID: 154,
    Task_Assigned_Employee_ID: 3,
    Task_Subject: "Return Merchandise Report",
    Task_Start_Date: "2016-03-17T00:00:00",
    Task_Due_Date: "2016-03-18T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 25,
    Task_Parent_ID: 22
  },
  {
    Task_ID: 155,
    Task_Assigned_Employee_ID: 32,
    Task_Subject: "Report on the State of Engineering Dept",
    Task_Start_Date: "2016-03-18T00:00:00",
    Task_Due_Date: "2016-03-19T00:00:00",
    Task_Status: "Not Started",
    Task_Priority: 2,
    Task_Completion: 0,
    Task_Parent_ID: 22
  },
  {
    Task_ID: 156,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Staff Productivity Report",
    Task_Start_Date: "2016-03-20T00:00:00",
    Task_Due_Date: "2016-03-21T00:00:00",
    Task_Status: "Not Started",
    Task_Priority: 2,
    Task_Completion: 0,
    Task_Parent_ID: 23
  },
  {
    Task_ID: 157,
    Task_Assigned_Employee_ID: 5,
    Task_Subject: "Review HR Budget Company Wide",
    Task_Start_Date: "2016-03-20T00:00:00",
    Task_Due_Date: "2016-03-25T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 40,
    Task_Parent_ID: 23
  },
  {
    Task_ID: 158,
    Task_Assigned_Employee_ID: 8,
    Task_Subject: "Sales Dept Budget Request Report",
    Task_Start_Date: "2016-03-23T00:00:00",
    Task_Due_Date: "2016-03-25T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 75,
    Task_Parent_ID: 23
  },
  {
    Task_ID: 159,
    Task_Assigned_Employee_ID: 9,
    Task_Subject: "Support Dept Budget Report",
    Task_Start_Date: "2016-03-23T00:00:00",
    Task_Due_Date: "2016-03-25T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 60,
    Task_Parent_ID: 23
  },
  {
    Task_ID: 160,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "IT Dept Budget Request Report",
    Task_Start_Date: "2016-03-23T00:00:00",
    Task_Due_Date: "2016-03-25T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 30,
    Task_Parent_ID: 23
  },
  {
    Task_ID: 161,
    Task_Assigned_Employee_ID: 32,
    Task_Subject: "Engineering Dept Budget Request Report",
    Task_Start_Date: "2016-03-23T00:00:00",
    Task_Due_Date: "2016-03-25T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 4,
    Task_Completion: 0,
    Task_Parent_ID: 23
  },
  {
    Task_ID: 162,
    Task_Assigned_Employee_ID: 26,
    Task_Subject: "1Q Travel Spend Report",
    Task_Start_Date: "2016-03-24T00:00:00",
    Task_Due_Date: "2016-03-25T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 30,
    Task_Parent_ID: 23
  },
  {
    Task_ID: 163,
    Task_Assigned_Employee_ID: 7,
    Task_Subject: "Approve Benefits Upgrade Package",
    Task_Start_Date: "2016-03-26T00:00:00",
    Task_Due_Date: "2016-03-27T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 2,
    Task_Completion: 0,
    Task_Parent_ID: 23
  },
  {
    Task_ID: 164,
    Task_Assigned_Employee_ID: 5,
    Task_Subject: "Final Budget Review",
    Task_Start_Date: "2016-03-26T00:00:00",
    Task_Due_Date: "2016-03-27T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 25,
    Task_Parent_ID: 23
  },
  {
    Task_ID: 165,
    Task_Assigned_Employee_ID: 2,
    Task_Subject: "State of Operations Report",
    Task_Start_Date: "2016-03-28T00:00:00",
    Task_Due_Date: "2016-03-31T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 45,
    Task_Parent_ID: 22
  },
  {
    Task_ID: 166,
    Task_Assigned_Employee_ID: 42,
    Task_Subject: "Online Sales Report",
    Task_Start_Date: "2016-03-29T00:00:00",
    Task_Due_Date: "2016-03-30T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 55,
    Task_Parent_ID: 22
  },
  {
    Task_ID: 167,
    Task_Assigned_Employee_ID: 13,
    Task_Subject: "Reprint All Shipping Labels",
    Task_Start_Date: "2016-04-01T00:00:00",
    Task_Due_Date: "2016-04-10T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 10,
    Task_Parent_ID: 24
  },
  {
    Task_ID: 168,
    Task_Assigned_Employee_ID: 28,
    Task_Subject: "Shipping Label Artwork",
    Task_Start_Date: "2016-04-02T00:00:00",
    Task_Due_Date: "2016-04-09T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 40,
    Task_Parent_ID: 24
  },
  {
    Task_ID: 169,
    Task_Assigned_Employee_ID: 13,
    Task_Subject: "Specs for New Shipping Label",
    Task_Start_Date: "2016-04-04T00:00:00",
    Task_Due_Date: "2016-04-05T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 2,
    Task_Completion: 100,
    Task_Parent_ID: 24
  },
  {
    Task_ID: 170,
    Task_Assigned_Employee_ID: 15,
    Task_Subject: "Move Packaging Materials to New Warehouse",
    Task_Start_Date: "2016-04-05T00:00:00",
    Task_Due_Date: "2016-04-15T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 60,
    Task_Parent_ID: 25
  },
  {
    Task_ID: 171,
    Task_Assigned_Employee_ID: 16,
    Task_Subject: "Move Inventory to New Warehouse",
    Task_Start_Date: "2016-04-05T00:00:00",
    Task_Due_Date: "2016-04-15T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 70,
    Task_Parent_ID: 25
  },
  {
    Task_ID: 172,
    Task_Assigned_Employee_ID: 14,
    Task_Subject: "Take Forklift to Service Center",
    Task_Start_Date: "2016-04-07T00:00:00",
    Task_Due_Date: "2016-04-18T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 60,
    Task_Parent_ID: 26
  },
  {
    Task_ID: 173,
    Task_Assigned_Employee_ID: 10,
    Task_Subject: "Approve Rental of Forklift",
    Task_Start_Date: "2016-04-08T00:00:00",
    Task_Due_Date: "2016-04-09T00:00:00",
    Task_Status: "Need Assistance",
    Task_Priority: 4,
    Task_Completion: 0,
    Task_Parent_ID: 26
  },
  {
    Task_ID: 174,
    Task_Assigned_Employee_ID: 7,
    Task_Subject: "Give Final Approval to Rent Forklift",
    Task_Start_Date: "2016-04-08T00:00:00",
    Task_Due_Date: "2016-04-08T00:00:00",
    Task_Status: "Need Assistance",
    Task_Priority: 2,
    Task_Completion: 0,
    Task_Parent_ID: 26
  },
  {
    Task_ID: 175,
    Task_Assigned_Employee_ID: 9,
    Task_Subject: "Review Complaint Reports",
    Task_Start_Date: "2016-04-17T00:00:00",
    Task_Due_Date: "2016-04-30T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 4,
    Task_Completion: 40,
    Task_Parent_ID: 22
  },
  {
    Task_ID: 176,
    Task_Assigned_Employee_ID: 6,
    Task_Subject: "Review Website Complaint Reports",
    Task_Start_Date: "2016-04-18T00:00:00",
    Task_Due_Date: "2016-04-24T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 65,
    Task_Parent_ID: 22
  },
  {
    Task_ID: 177,
    Task_Assigned_Employee_ID: 33,
    Task_Subject: "Test New Automation App",
    Task_Start_Date: "2016-04-20T00:00:00",
    Task_Due_Date: "2016-04-30T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 80,
    Task_Parent_ID: 20
  },
  {
    Task_ID: 178,
    Task_Assigned_Employee_ID: 38,
    Task_Subject: "Fix Synchronization Issues",
    Task_Start_Date: "2016-04-21T00:00:00",
    Task_Due_Date: "2016-04-21T00:00:00",
    Task_Status: "Completed",
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 20
  },
  {
    Task_ID: 179,
    Task_Assigned_Employee_ID: 22,
    Task_Subject: "Free Up Space for New Application Set",
    Task_Start_Date: "2016-04-19T00:00:00",
    Task_Due_Date: "2016-04-19T00:00:00",
    Task_Status: "Not Started",
    Task_Priority: 2,
    Task_Completion: 0,
    Task_Parent_ID: 20
  },
  {
    Task_ID: 180,
    Task_Assigned_Employee_ID: 9,
    Task_Subject: "Support Team Evaluation Report",
    Task_Start_Date: "2016-05-01T00:00:00",
    Task_Due_Date: "2016-05-07T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 2,
    Task_Completion: 0,
    Task_Parent_ID: 22
  },
  {
    Task_ID: 181,
    Task_Assigned_Employee_ID: 1,
    Task_Subject: "Review New Customer Follow Up Plan",
    Task_Start_Date: "2016-05-05T00:00:00",
    Task_Due_Date: "2016-05-11T00:00:00",
    Task_Status: "In Progress",
    Task_Priority: 2,
    Task_Completion: 75,
    Task_Parent_ID: 27
  },
  {
    Task_ID: 182,
    Task_Assigned_Employee_ID: 2,
    Task_Subject: "Submit Customer Follow Up Plan Feedback",
    Task_Start_Date: "2016-05-06T00:00:00",
    Task_Due_Date: "2016-05-10T00:00:00",
    Task_Status: "Deferred",
    Task_Priority: 2,
    Task_Completion: 0,
    Task_Parent_ID: 27
  }
];

let employees: Employee[] = [
  {
    ID: 1,
    Name: "John Heart",
    Picture: "images/employees/01.png"
  },
  {
    ID: 2,
    Name: "Samantha Bright",
    Picture: "images/employees/04.png"
  },
  {
    ID: 3,
    Name: "Arthur Miller",
    Picture: "images/employees/02.png"
  },
  {
    ID: 4,
    Name: "Robert Reagan",
    Picture: "images/employees/03.png"
  },
  {
    ID: 5,
    Name: "Greta Sims",
    Picture: "images/employees/06.png"
  },
  {
    ID: 6,
    Name: "Brett Wade",
    Picture: "images/employees/05.png"
  },
  {
    ID: 7,
    Name: "Sandra Johnson",
    Picture: "images/employees/08.png"
  },
  {
    ID: 8,
    Name: "Ed Holmes",
    Picture: "images/employees/07.png"
  },
  {
    ID: 9,
    Name: "Barb Banks",
    Picture: "images/employees/09.png"
  },
  {
    ID: 10,
    Name: "Kevin Carter",
    Picture: "images/employees/10.png"
  },
  {
    ID: 11,
    Name: "Cindy Stanwick",
    Picture: "images/employees/15.png"
  },
  {
    ID: 12,
    Name: "Sammy Hill",
    Picture: "images/employees/11.png"
  },
  {
    ID: 13,
    Name: "Davey Jones",
    Picture: "images/employees/12.png"
  },
  {
    ID: 14,
    Name: "Victor Norris",
    Picture: "images/employees/13.png"
  },
  {
    ID: 15,
    Name: "Mary Stern",
    Picture: "images/employees/16.png"
  },
  {
    ID: 16,
    Name: "Robin Cosworth",
    Picture: "images/employees/14.png"
  },
  {
    ID: 17,
    Name: "Kelly Rodriguez",
    Picture: "images/employees/17.png"
  },
  {
    ID: 18,
    Name: "James Anderson",
    Picture: "images/employees/18.png"
  },
  {
    ID: 19,
    Name: "Antony Remmen",
    Picture: "images/employees/19.png"
  },
  {
    ID: 20,
    Name: "Olivia Peyton",
    Picture: "images/employees/20.png"
  },
  {
    ID: 21,
    Name: "Taylor Riley",
    Picture: "images/employees/21.png"
  },
  {
    ID: 22,
    Name: "Amelia Harper",
    Picture: "images/employees/22.png"
  },
  {
    ID: 23,
    Name: "Wally Hobbs",
    Picture: "images/employees/23.png"
  },
  {
    ID: 24,
    Name: "Brad Jameson",
    Picture: "images/employees/24.png"
  },
  {
    ID: 25,
    Name: "Karen Goodson",
    Picture: "images/employees/25.png"
  },
  {
    ID: 26,
    Name: "Marcus Orbison",
    Picture: "images/employees/26.png"
  },
  {
    ID: 27,
    Name: "Sandy Bright",
    Picture: "images/employees/27.png"
  },
  {
    ID: 28,
    Name: "Morgan Kennedy",
    Picture: "images/employees/28.png"
  },
  {
    ID: 29,
    Name: "Violet Bailey",
    Picture: "images/employees/29.png"
  },
  {
    ID: 30,
    Name: "Ken Samuelson",
    Picture: "images/employees/32.png"
  },
  {
    ID: 31,
    Name: "Nat Maguiree",
    Picture: "images/employees/34.png"
  },
  {
    ID: 32,
    Name: "Bart Arnaz",
    Picture: "images/employees/37.png"
  },
  {
    ID: 33,
    Name: "Leah Simpson",
    Picture: "images/employees/38.png"
  },
  {
    ID: 34,
    Name: "Arnie Schwartz",
    Picture: "images/employees/40.png"
  },
  {
    ID: 35,
    Name: "Billy Zimmer",
    Picture: "images/employees/42.png"
  },
  {
    ID: 36,
    Name: "Samantha Piper",
    Picture: "images/employees/30.png"
  },
  {
    ID: 37,
    Name: "Maggie Boxter",
    Picture: "images/employees/31.png"
  },
  {
    ID: 38,
    Name: "Terry Bradley",
    Picture: "images/employees/33.png"
  },
  {
    ID: 39,
    Name: "Gabe Jones",
    Picture: "images/employees/35.png"
  },
  {
    ID: 40,
    Name: "Lucy Ball",
    Picture: "images/employees/36.png"
  },
  {
    ID: 41,
    Name: "Jim Packard",
    Picture: "images/employees/43.png"
  },
  {
    ID: 42,
    Name: "Hannah Brookly",
    Picture: "images/employees/39.png"
  },
  {
    ID: 43,
    Name: "Harv Mudd",
    Picture: "images/employees/44.png"
  },
  {
    ID: 44,
    Name: "Clark Morgan",
    Picture: "images/employees/45.png"
  },
  {
    ID: 45,
    Name: "Todd Hoffman",
    Picture: "images/employees/46.png"
  },
  {
    ID: 46,
    Name: "Jackie Garmin",
    Picture: "images/employees/47.png"
  },
  {
    ID: 47,
    Name: "Lincoln Bartlett",
    Picture: "images/employees/49.png"
  },
  {
    ID: 48,
    Name: "Brad Farkus",
    Picture: "images/employees/50.png"
  },
  {
    ID: 49,
    Name: "Jenny Hobbs",
    Picture: "images/employees/48.png"
  },
  {
    ID: 50,
    Name: "Dallas Lou",
    Picture: "images/employees/41.png"
  },
  {
    ID: 51,
    Name: "Stu Pizaro",
    Picture: ""
  }
];

let priorities: Priority[] = [
  { id: 1, value: "Low" },
  { id: 2, value: "Normal" },
  { id: 3, value: "Urgent" },
  { id: 4, value: "High" }
];

export class EmployeeScheduler {
  text: string;
  id: number;
  color: string;
  avatar: string;
  age: number;
  discipline: string;
}

export class Data {
  text: string;
  employeeID: number;
  startDate: Date;
  endDate: Date;
}

let employeesScheduler: EmployeeScheduler[] = [
  {
    text: "John Heart",
    id: 1,
    color: "#56ca85",
    avatar: "images/gym/coach-man.png",
    age: 27,
    discipline: "ABS, Fitball, StepFit"
  },
  {
    text: "Sandra Johnson",
    id: 2,
    color: "#ff9747",
    avatar: "images/gym/coach-woman.png",
    age: 25,
    discipline: "ABS, Fitball, StepFit"
  }
];

let data: Data[] = [
  {
    text: "Helen",
    employeeID: 2,
    startDate: new Date(2016, 7, 2, 9, 30),
    endDate: new Date(2016, 7, 2, 11, 30)
  },
  {
    text: "Helen",
    employeeID: 2,
    startDate: new Date(2016, 7, 11, 9, 30),
    endDate: new Date(2016, 7, 12, 11, 30)
  },
  {
    text: "Alex",
    employeeID: 1,
    startDate: new Date(2016, 7, 3, 9, 30),
    endDate: new Date(2016, 7, 3, 11, 30)
  },
  {
    text: "Alex",
    employeeID: 1,
    startDate: new Date(2016, 7, 12, 12, 0),
    endDate: new Date(2016, 7, 12, 13, 0)
  },
  {
    text: "Alex",
    employeeID: 2,
    startDate: new Date(2016, 7, 17, 9, 30),
    endDate: new Date(2016, 7, 17, 11, 30)
  },
  {
    text: "Stan",
    employeeID: 1,
    startDate: new Date(2016, 7, 8, 9, 30),
    endDate: new Date(2016, 7, 8, 11, 30)
  },
  {
    text: "Stan",
    employeeID: 1,
    startDate: new Date(2016, 7, 29, 9, 30),
    endDate: new Date(2016, 7, 29, 11, 30)
  },
  {
    text: "Stan",
    employeeID: 1,
    startDate: new Date(2016, 7, 31, 9, 30),
    endDate: new Date(2016, 7, 31, 11, 30)
  },
  {
    text: "Rachel",
    employeeID: 2,
    startDate: new Date(2016, 7, 5, 9, 30),
    endDate: new Date(2016, 7, 5, 11, 30)
  },
  {
    text: "Rachel",
    employeeID: 2,
    startDate: new Date(2016, 7, 8, 9, 30),
    endDate: new Date(2016, 7, 8, 11, 30)
  },
  {
    text: "Rachel",
    employeeID: 1,
    startDate: new Date(2016, 7, 22, 9, 30),
    endDate: new Date(2016, 7, 22, 11, 30)
  },
  {
    text: "Kelly",
    employeeID: 2,
    startDate: new Date(2016, 7, 16, 9, 30),
    endDate: new Date(2016, 7, 16, 11, 30)
  },
  {
    text: "Kelly",
    employeeID: 2,
    startDate: new Date(2016, 7, 30, 9, 30),
    endDate: new Date(2016, 7, 30, 11, 30)
  }
];

class Complaints {
  complaint: string;
  count: number;
}

export class ComplaintsWithPercent {
  complaint: string;
  count: number;
  cumulativePercent: number;
}

let complaintsData: Complaints[] = [
  { complaint: "Cold pizza", count: 780 },
  { complaint: "Not enough cheese", count: 120 },
  { complaint: "Underbaked or Overbaked", count: 52 },
  { complaint: "Delayed delivery", count: 1123 },
  { complaint: "Damaged pizza", count: 321 },
  { complaint: "Incorrect billing", count: 89 },
  { complaint: "Wrong size delivered", count: 222 }
];

export class TaskGantt {
  id: number;
  parentId: number;
  title: string;
  start: Date;
  end: Date;
  progress: number;
}

export class Dependency {
  id: number;
  predecessorId: number;
  successorId: number;
  type: number;
}

export class Resource {
  id: number;
  text: string;
}

export class ResourceAssignment {
  id: number;
  taskId: number;
  resourceId: number;
}

let tasksGantt: TaskGantt[] = [
  {
    id: 1,
    parentId: 0,
    title: "Software Development",
    start: new Date("2019-02-21T05:00:00.000Z"),
    end: new Date("2019-07-04T12:00:00.000Z"),
    progress: 31
  },
  {
    id: 2,
    parentId: 1,
    title: "Scope",
    start: new Date("2019-02-21T05:00:00.000Z"),
    end: new Date("2019-02-26T09:00:00.000Z"),
    progress: 60
  },
  {
    id: 3,
    parentId: 2,
    title: "Determine project scope",
    start: new Date("2019-02-21T05:00:00.000Z"),
    end: new Date("2019-02-21T09:00:00.000Z"),
    progress: 100
  },
  {
    id: 4,
    parentId: 2,
    title: "Secure project sponsorship",
    start: new Date("2019-02-21T10:00:00.000Z"),
    end: new Date("2019-02-22T09:00:00.000Z"),
    progress: 100
  },
  {
    id: 5,
    parentId: 2,
    title: "Define preliminary resources",
    start: new Date("2019-02-22T10:00:00.000Z"),
    end: new Date("2019-02-25T09:00:00.000Z"),
    progress: 60
  },
  {
    id: 6,
    parentId: 2,
    title: "Secure core resources",
    start: new Date("2019-02-25T10:00:00.000Z"),
    end: new Date("2019-02-26T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 7,
    parentId: 2,
    title: "Scope complete",
    start: new Date("2019-02-26T09:00:00.000Z"),
    end: new Date("2019-02-26T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 8,
    parentId: 1,
    title: "Analysis/Software Requirements",
    start: new Date("2019-02-26T10:00:00.000Z"),
    end: new Date("2019-03-18T09:00:00.000Z"),
    progress: 80
  },
  {
    id: 9,
    parentId: 8,
    title: "Conduct needs analysis",
    start: new Date("2019-02-26T10:00:00.000Z"),
    end: new Date("2019-03-05T09:00:00.000Z"),
    progress: 100
  },
  {
    id: 10,
    parentId: 8,
    title: "Draft preliminary software specifications",
    start: new Date("2019-03-05T10:00:00.000Z"),
    end: new Date("2019-03-08T09:00:00.000Z"),
    progress: 100
  },
  {
    id: 11,
    parentId: 8,
    title: "Develop preliminary budget",
    start: new Date("2019-03-08T10:00:00.000Z"),
    end: new Date("2019-03-12T09:00:00.000Z"),
    progress: 100
  },
  {
    id: 12,
    parentId: 8,
    title: "Review software specifications/budget with team",
    start: new Date("2019-03-12T10:00:00.000Z"),
    end: new Date("2019-03-12T14:00:00.000Z"),
    progress: 100
  },
  {
    id: 13,
    parentId: 8,
    title: "Incorporate feedback on software specifications",
    start: new Date("2019-03-13T05:00:00.000Z"),
    end: new Date("2019-03-13T14:00:00.000Z"),
    progress: 70
  },
  {
    id: 14,
    parentId: 8,
    title: "Develop delivery timeline",
    start: new Date("2019-03-14T05:00:00.000Z"),
    end: new Date("2019-03-14T14:00:00.000Z"),
    progress: 0
  },
  {
    id: 15,
    parentId: 8,
    title: "Obtain approvals to proceed (concept, timeline, budget)",
    start: new Date("2019-03-15T05:00:00.000Z"),
    end: new Date("2019-03-15T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 16,
    parentId: 8,
    title: "Secure required resources",
    start: new Date("2019-03-15T10:00:00.000Z"),
    end: new Date("2019-03-18T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 17,
    parentId: 8,
    title: "Analysis complete",
    start: new Date("2019-03-18T09:00:00.000Z"),
    end: new Date("2019-03-18T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 18,
    parentId: 1,
    title: "Design",
    start: new Date("2019-03-18T10:00:00.000Z"),
    end: new Date("2019-04-05T14:00:00.000Z"),
    progress: 80
  },
  {
    id: 19,
    parentId: 18,
    title: "Review preliminary software specifications",
    start: new Date("2019-03-18T10:00:00.000Z"),
    end: new Date("2019-03-20T09:00:00.000Z"),
    progress: 100
  },
  {
    id: 20,
    parentId: 18,
    title: "Develop functional specifications",
    start: new Date("2019-03-20T10:00:00.000Z"),
    end: new Date("2019-03-27T09:00:00.000Z"),
    progress: 100
  },
  {
    id: 21,
    parentId: 18,
    title: "Develop prototype based on functional specifications",
    start: new Date("2019-03-27T10:00:00.000Z"),
    end: new Date("2019-04-02T09:00:00.000Z"),
    progress: 100
  },
  {
    id: 22,
    parentId: 18,
    title: "Review functional specifications",
    start: new Date("2019-04-02T10:00:00.000Z"),
    end: new Date("2019-04-04T09:00:00.000Z"),
    progress: 30
  },
  {
    id: 23,
    parentId: 18,
    title: "Incorporate feedback into functional specifications",
    start: new Date("2019-04-04T10:00:00.000Z"),
    end: new Date("2019-04-05T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 24,
    parentId: 18,
    title: "Obtain approval to proceed",
    start: new Date("2019-04-05T10:00:00.000Z"),
    end: new Date("2019-04-05T14:00:00.000Z"),
    progress: 0
  },
  {
    id: 25,
    parentId: 18,
    title: "Design complete",
    start: new Date("2019-04-05T14:00:00.000Z"),
    end: new Date("2019-04-05T14:00:00.000Z"),
    progress: 0
  },
  {
    id: 26,
    parentId: 1,
    title: "Development",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-05-07T12:00:00.000Z"),
    progress: 42
  },
  {
    id: 27,
    parentId: 26,
    title: "Review functional specifications",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-04-08T14:00:00.000Z"),
    progress: 100
  },
  {
    id: 28,
    parentId: 26,
    title: "Identify modular/tiered design parameters",
    start: new Date("2019-04-09T05:00:00.000Z"),
    end: new Date("2019-04-09T14:00:00.000Z"),
    progress: 100
  },
  {
    id: 29,
    parentId: 26,
    title: "Assign development staff",
    start: new Date("2019-04-10T05:00:00.000Z"),
    end: new Date("2019-04-10T14:00:00.000Z"),
    progress: 100
  },
  {
    id: 30,
    parentId: 26,
    title: "Develop code",
    start: new Date("2019-04-11T05:00:00.000Z"),
    end: new Date("2019-05-01T14:00:00.000Z"),
    progress: 49
  },
  {
    id: 31,
    parentId: 26,
    title: "Developer testing (primary debugging)",
    start: new Date("2019-04-16T12:00:00.000Z"),
    end: new Date("2019-05-07T12:00:00.000Z"),
    progress: 24
  },
  {
    id: 32,
    parentId: 26,
    title: "Development complete",
    start: new Date("2019-05-07T12:00:00.000Z"),
    end: new Date("2019-05-07T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 33,
    parentId: 1,
    title: "Testing",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-06-13T12:00:00.000Z"),
    progress: 23
  },
  {
    id: 34,
    parentId: 33,
    title: "Develop unit test plans using product specifications",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-04-11T14:00:00.000Z"),
    progress: 100
  },
  {
    id: 35,
    parentId: 33,
    title: "Develop integration test plans using product specifications",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-04-11T14:00:00.000Z"),
    progress: 100
  },
  {
    id: 36,
    parentId: 33,
    title: "Unit Testing",
    start: new Date("2019-05-07T12:00:00.000Z"),
    end: new Date("2019-05-28T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 37,
    parentId: 36,
    title: "Review modular code",
    start: new Date("2019-05-07T12:00:00.000Z"),
    end: new Date("2019-05-14T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 38,
    parentId: 36,
    title: "Test component modules to product specifications",
    start: new Date("2019-05-14T12:00:00.000Z"),
    end: new Date("2019-05-16T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 39,
    parentId: 36,
    title: "Identify anomalies to product specifications",
    start: new Date("2019-05-16T12:00:00.000Z"),
    end: new Date("2019-05-21T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 40,
    parentId: 36,
    title: "Modify code",
    start: new Date("2019-05-21T12:00:00.000Z"),
    end: new Date("2019-05-24T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 41,
    parentId: 36,
    title: "Re-test modified code",
    start: new Date("2019-05-24T12:00:00.000Z"),
    end: new Date("2019-05-28T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 42,
    parentId: 36,
    title: "Unit testing complete",
    start: new Date("2019-05-28T12:00:00.000Z"),
    end: new Date("2019-05-28T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 43,
    parentId: 33,
    title: "Integration Testing",
    start: new Date("2019-05-28T12:00:00.000Z"),
    end: new Date("2019-06-13T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 44,
    parentId: 43,
    title: "Test module integration",
    start: new Date("2019-05-28T12:00:00.000Z"),
    end: new Date("2019-06-04T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 45,
    parentId: 43,
    title: "Identify anomalies to specifications",
    start: new Date("2019-06-04T12:00:00.000Z"),
    end: new Date("2019-06-06T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 46,
    parentId: 43,
    title: "Modify code",
    start: new Date("2019-06-06T12:00:00.000Z"),
    end: new Date("2019-06-11T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 47,
    parentId: 43,
    title: "Re-test modified code",
    start: new Date("2019-06-11T12:00:00.000Z"),
    end: new Date("2019-06-13T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 48,
    parentId: 43,
    title: "Integration testing complete",
    start: new Date("2019-06-13T12:00:00.000Z"),
    end: new Date("2019-06-13T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 49,
    parentId: 1,
    title: "Training",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-06-10T12:00:00.000Z"),
    progress: 25
  },
  {
    id: 50,
    parentId: 49,
    title: "Develop training specifications for end users",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-04-10T14:00:00.000Z"),
    progress: 100
  },
  {
    id: 51,
    parentId: 49,
    title: "Develop training specifications for helpdesk support staff",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-04-10T14:00:00.000Z"),
    progress: 100
  },
  {
    id: 52,
    parentId: 49,
    title:
      "Identify training delivery methodology (computer based training, classroom, etc.)",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-04-09T14:00:00.000Z"),
    progress: 100
  },
  {
    id: 53,
    parentId: 49,
    title: "Develop training materials",
    start: new Date("2019-05-07T12:00:00.000Z"),
    end: new Date("2019-05-28T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 54,
    parentId: 49,
    title: "Conduct training usability study",
    start: new Date("2019-05-28T12:00:00.000Z"),
    end: new Date("2019-06-03T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 55,
    parentId: 49,
    title: "Finalize training materials",
    start: new Date("2019-06-03T12:00:00.000Z"),
    end: new Date("2019-06-06T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 56,
    parentId: 49,
    title: "Develop training delivery mechanism",
    start: new Date("2019-06-06T12:00:00.000Z"),
    end: new Date("2019-06-10T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 57,
    parentId: 49,
    title: "Training materials complete",
    start: new Date("2019-06-10T12:00:00.000Z"),
    end: new Date("2019-06-10T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 58,
    parentId: 1,
    title: "Documentation",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-05-20T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 59,
    parentId: 58,
    title: "Develop Help specification",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-04-08T14:00:00.000Z"),
    progress: 80
  },
  {
    id: 60,
    parentId: 58,
    title: "Develop Help system",
    start: new Date("2019-04-22T10:00:00.000Z"),
    end: new Date("2019-05-13T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 61,
    parentId: 58,
    title: "Review Help documentation",
    start: new Date("2019-05-13T10:00:00.000Z"),
    end: new Date("2019-05-16T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 62,
    parentId: 58,
    title: "Incorporate Help documentation feedback",
    start: new Date("2019-05-16T10:00:00.000Z"),
    end: new Date("2019-05-20T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 63,
    parentId: 58,
    title: "Develop user manuals specifications",
    start: new Date("2019-04-08T05:00:00.000Z"),
    end: new Date("2019-04-09T14:00:00.000Z"),
    progress: 65
  },
  {
    id: 64,
    parentId: 58,
    title: "Develop user manuals",
    start: new Date("2019-04-22T10:00:00.000Z"),
    end: new Date("2019-05-13T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 65,
    parentId: 58,
    title: "Review all user documentation",
    start: new Date("2019-05-13T10:00:00.000Z"),
    end: new Date("2019-05-15T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 66,
    parentId: 58,
    title: "Incorporate user documentation feedback",
    start: new Date("2019-05-15T10:00:00.000Z"),
    end: new Date("2019-05-17T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 67,
    parentId: 58,
    title: "Documentation complete",
    start: new Date("2019-05-20T09:00:00.000Z"),
    end: new Date("2019-05-20T09:00:00.000Z"),
    progress: 0
  },
  {
    id: 68,
    parentId: 1,
    title: "Pilot",
    start: new Date("2019-03-18T10:00:00.000Z"),
    end: new Date("2019-06-24T12:00:00.000Z"),
    progress: 22
  },
  {
    id: 69,
    parentId: 68,
    title: "Identify test group",
    start: new Date("2019-03-18T10:00:00.000Z"),
    end: new Date("2019-03-19T09:00:00.000Z"),
    progress: 100
  },
  {
    id: 70,
    parentId: 68,
    title: "Develop software delivery mechanism",
    start: new Date("2019-03-19T10:00:00.000Z"),
    end: new Date("2019-03-20T09:00:00.000Z"),
    progress: 100
  },
  {
    id: 71,
    parentId: 68,
    title: "Install/deploy software",
    start: new Date("2019-06-13T12:00:00.000Z"),
    end: new Date("2019-06-14T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 72,
    parentId: 68,
    title: "Obtain user feedback",
    start: new Date("2019-06-14T12:00:00.000Z"),
    end: new Date("2019-06-21T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 73,
    parentId: 68,
    title: "Evaluate testing information",
    start: new Date("2019-06-21T12:00:00.000Z"),
    end: new Date("2019-06-24T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 74,
    parentId: 68,
    title: "Pilot complete",
    start: new Date("2019-06-24T12:00:00.000Z"),
    end: new Date("2019-06-24T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 75,
    parentId: 1,
    title: "Deployment",
    start: new Date("2019-06-24T12:00:00.000Z"),
    end: new Date("2019-07-01T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 76,
    parentId: 75,
    title: "Determine final deployment strategy",
    start: new Date("2019-06-24T12:00:00.000Z"),
    end: new Date("2019-06-25T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 77,
    parentId: 75,
    title: "Develop deployment methodology",
    start: new Date("2019-06-25T12:00:00.000Z"),
    end: new Date("2019-06-26T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 78,
    parentId: 75,
    title: "Secure deployment resources",
    start: new Date("2019-06-26T12:00:00.000Z"),
    end: new Date("2019-06-27T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 79,
    parentId: 75,
    title: "Train support staff",
    start: new Date("2019-06-27T12:00:00.000Z"),
    end: new Date("2019-06-28T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 80,
    parentId: 75,
    title: "Deploy software",
    start: new Date("2019-06-28T12:00:00.000Z"),
    end: new Date("2019-07-01T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 81,
    parentId: 75,
    title: "Deployment complete",
    start: new Date("2019-07-01T12:00:00.000Z"),
    end: new Date("2019-07-01T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 82,
    parentId: 1,
    title: "Post Implementation Review",
    start: new Date("2019-07-01T12:00:00.000Z"),
    end: new Date("2019-07-04T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 83,
    parentId: 82,
    title: "Document lessons learned",
    start: new Date("2019-07-01T12:00:00.000Z"),
    end: new Date("2019-07-02T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 84,
    parentId: 82,
    title: "Distribute to team members",
    start: new Date("2019-07-02T12:00:00.000Z"),
    end: new Date("2019-07-03T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 85,
    parentId: 82,
    title: "Create software maintenance team",
    start: new Date("2019-07-03T12:00:00.000Z"),
    end: new Date("2019-07-04T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 86,
    parentId: 82,
    title: "Post implementation review complete",
    start: new Date("2019-07-04T12:00:00.000Z"),
    end: new Date("2019-07-04T12:00:00.000Z"),
    progress: 0
  },
  {
    id: 87,
    parentId: 1,
    title: "Software development template complete",
    start: new Date("2019-07-04T12:00:00.000Z"),
    end: new Date("2019-07-04T12:00:00.000Z"),
    progress: 0
  }
];

let dependencies: Dependency[] = [
  {
    id: 0,
    predecessorId: 1,
    successorId: 2,
    type: 0
  },
  {
    id: 1,
    predecessorId: 2,
    successorId: 3,
    type: 0
  },
  {
    id: 2,
    predecessorId: 3,
    successorId: 4,
    type: 0
  },
  {
    id: 3,
    predecessorId: 4,
    successorId: 5,
    type: 0
  },
  {
    id: 4,
    predecessorId: 5,
    successorId: 6,
    type: 0
  },
  {
    id: 5,
    predecessorId: 6,
    successorId: 7,
    type: 0
  },
  {
    id: 6,
    predecessorId: 7,
    successorId: 8,
    type: 0
  },
  {
    id: 7,
    predecessorId: 8,
    successorId: 9,
    type: 0
  },
  {
    id: 8,
    predecessorId: 9,
    successorId: 10,
    type: 0
  },
  {
    id: 9,
    predecessorId: 10,
    successorId: 11,
    type: 0
  },
  {
    id: 10,
    predecessorId: 11,
    successorId: 12,
    type: 0
  },
  {
    id: 11,
    predecessorId: 12,
    successorId: 13,
    type: 0
  },
  {
    id: 12,
    predecessorId: 13,
    successorId: 14,
    type: 0
  },
  {
    id: 13,
    predecessorId: 14,
    successorId: 15,
    type: 0
  },
  {
    id: 14,
    predecessorId: 15,
    successorId: 16,
    type: 0
  },
  {
    id: 15,
    predecessorId: 16,
    successorId: 17,
    type: 0
  },
  {
    id: 16,
    predecessorId: 17,
    successorId: 18,
    type: 0
  },
  {
    id: 17,
    predecessorId: 18,
    successorId: 19,
    type: 0
  },
  {
    id: 18,
    predecessorId: 19,
    successorId: 20,
    type: 0
  },
  {
    id: 19,
    predecessorId: 20,
    successorId: 21,
    type: 0
  },
  {
    id: 20,
    predecessorId: 21,
    successorId: 22,
    type: 0
  },
  {
    id: 21,
    predecessorId: 22,
    successorId: 23,
    type: 0
  },
  {
    id: 22,
    predecessorId: 23,
    successorId: 24,
    type: 0
  },
  {
    id: 23,
    predecessorId: 24,
    successorId: 25,
    type: 0
  },
  {
    id: 24,
    predecessorId: 25,
    successorId: 26,
    type: 0
  },
  {
    id: 25,
    predecessorId: 26,
    successorId: 27,
    type: 0
  },
  {
    id: 26,
    predecessorId: 27,
    successorId: 28,
    type: 0
  },
  {
    id: 27,
    predecessorId: 28,
    successorId: 29,
    type: 0
  },
  {
    id: 28,
    predecessorId: 29,
    successorId: 30,
    type: 0
  },
  {
    id: 29,
    predecessorId: 30,
    successorId: 31,
    type: 0
  },
  {
    id: 30,
    predecessorId: 31,
    successorId: 32,
    type: 0
  },
  {
    id: 31,
    predecessorId: 32,
    successorId: 33,
    type: 0
  },
  {
    id: 32,
    predecessorId: 33,
    successorId: 34,
    type: 0
  },
  {
    id: 33,
    predecessorId: 34,
    successorId: 35,
    type: 0
  },
  {
    id: 34,
    predecessorId: 35,
    successorId: 36,
    type: 0
  },
  {
    id: 35,
    predecessorId: 36,
    successorId: 37,
    type: 0
  },
  {
    id: 36,
    predecessorId: 37,
    successorId: 38,
    type: 0
  },
  {
    id: 37,
    predecessorId: 38,
    successorId: 39,
    type: 0
  },
  {
    id: 38,
    predecessorId: 39,
    successorId: 40,
    type: 0
  },
  {
    id: 39,
    predecessorId: 40,
    successorId: 41,
    type: 0
  },
  {
    id: 40,
    predecessorId: 41,
    successorId: 42,
    type: 0
  },
  {
    id: 41,
    predecessorId: 42,
    successorId: 43,
    type: 0
  },
  {
    id: 42,
    predecessorId: 43,
    successorId: 44,
    type: 0
  },
  {
    id: 43,
    predecessorId: 44,
    successorId: 45,
    type: 0
  },
  {
    id: 44,
    predecessorId: 45,
    successorId: 46,
    type: 0
  },
  {
    id: 45,
    predecessorId: 46,
    successorId: 47,
    type: 0
  },
  {
    id: 46,
    predecessorId: 47,
    successorId: 48,
    type: 0
  },
  {
    id: 47,
    predecessorId: 48,
    successorId: 49,
    type: 0
  },
  {
    id: 48,
    predecessorId: 49,
    successorId: 50,
    type: 0
  },
  {
    id: 49,
    predecessorId: 50,
    successorId: 51,
    type: 0
  },
  {
    id: 50,
    predecessorId: 51,
    successorId: 52,
    type: 0
  },
  {
    id: 51,
    predecessorId: 52,
    successorId: 53,
    type: 0
  },
  {
    id: 52,
    predecessorId: 53,
    successorId: 54,
    type: 0
  },
  {
    id: 53,
    predecessorId: 54,
    successorId: 55,
    type: 0
  },
  {
    id: 54,
    predecessorId: 55,
    successorId: 56,
    type: 0
  },
  {
    id: 55,
    predecessorId: 56,
    successorId: 57,
    type: 0
  },
  {
    id: 56,
    predecessorId: 57,
    successorId: 58,
    type: 0
  },
  {
    id: 57,
    predecessorId: 58,
    successorId: 59,
    type: 0
  },
  {
    id: 58,
    predecessorId: 59,
    successorId: 60,
    type: 0
  },
  {
    id: 59,
    predecessorId: 60,
    successorId: 61,
    type: 0
  },
  {
    id: 60,
    predecessorId: 61,
    successorId: 62,
    type: 0
  },
  {
    id: 61,
    predecessorId: 62,
    successorId: 63,
    type: 0
  },
  {
    id: 62,
    predecessorId: 63,
    successorId: 64,
    type: 0
  },
  {
    id: 63,
    predecessorId: 64,
    successorId: 65,
    type: 0
  },
  {
    id: 64,
    predecessorId: 65,
    successorId: 66,
    type: 0
  },
  {
    id: 65,
    predecessorId: 66,
    successorId: 67,
    type: 0
  },
  {
    id: 66,
    predecessorId: 67,
    successorId: 68,
    type: 0
  },
  {
    id: 67,
    predecessorId: 68,
    successorId: 69,
    type: 0
  },
  {
    id: 68,
    predecessorId: 69,
    successorId: 70,
    type: 0
  },
  {
    id: 69,
    predecessorId: 70,
    successorId: 71,
    type: 0
  },
  {
    id: 70,
    predecessorId: 71,
    successorId: 72,
    type: 0
  },
  {
    id: 71,
    predecessorId: 72,
    successorId: 73,
    type: 0
  },
  {
    id: 72,
    predecessorId: 73,
    successorId: 74,
    type: 0
  },
  {
    id: 73,
    predecessorId: 74,
    successorId: 75,
    type: 0
  },
  {
    id: 74,
    predecessorId: 75,
    successorId: 76,
    type: 0
  },
  {
    id: 75,
    predecessorId: 76,
    successorId: 77,
    type: 0
  },
  {
    id: 76,
    predecessorId: 77,
    successorId: 78,
    type: 0
  },
  {
    id: 77,
    predecessorId: 78,
    successorId: 79,
    type: 0
  },
  {
    id: 78,
    predecessorId: 79,
    successorId: 80,
    type: 0
  },
  {
    id: 79,
    predecessorId: 80,
    successorId: 81,
    type: 0
  },
  {
    id: 80,
    predecessorId: 81,
    successorId: 82,
    type: 0
  },
  {
    id: 81,
    predecessorId: 82,
    successorId: 83,
    type: 0
  },
  {
    id: 82,
    predecessorId: 83,
    successorId: 84,
    type: 0
  },
  {
    id: 83,
    predecessorId: 84,
    successorId: 85,
    type: 0
  },
  {
    id: 84,
    predecessorId: 85,
    successorId: 86,
    type: 0
  },
  {
    id: 85,
    predecessorId: 86,
    successorId: 87,
    type: 0
  }
];

let resources: Resource[] = [
  {
    id: 1,
    text: "Management"
  },
  {
    id: 2,
    text: "Project Manager"
  },
  {
    id: 3,
    text: "Analyst"
  },
  {
    id: 4,
    text: "Developer"
  },
  {
    id: 5,
    text: "Testers"
  },
  {
    id: 6,
    text: "Trainers"
  },
  {
    id: 7,
    text: "Technical Communicators"
  },
  {
    id: 8,
    text: "Deployment Team"
  }
];

let resourceAssignments: ResourceAssignment[] = [
  {
    id: 0,
    taskId: 3,
    resourceId: 1
  },
  {
    id: 1,
    taskId: 4,
    resourceId: 1
  },
  {
    id: 2,
    taskId: 5,
    resourceId: 2
  },
  {
    id: 3,
    taskId: 6,
    resourceId: 2
  },
  {
    id: 4,
    taskId: 9,
    resourceId: 3
  },
  {
    id: 5,
    taskId: 10,
    resourceId: 3
  },
  {
    id: 6,
    taskId: 11,
    resourceId: 2
  },
  {
    id: 7,
    taskId: 12,
    resourceId: 2
  },
  {
    id: 8,
    taskId: 12,
    resourceId: 3
  },
  {
    id: 9,
    taskId: 13,
    resourceId: 3
  },
  {
    id: 10,
    taskId: 14,
    resourceId: 2
  },
  {
    id: 11,
    taskId: 15,
    resourceId: 1
  },
  {
    id: 12,
    taskId: 15,
    resourceId: 2
  },
  {
    id: 13,
    taskId: 16,
    resourceId: 2
  },
  {
    id: 14,
    taskId: 19,
    resourceId: 3
  },
  {
    id: 15,
    taskId: 20,
    resourceId: 3
  },
  {
    id: 16,
    taskId: 21,
    resourceId: 3
  },
  {
    id: 17,
    taskId: 22,
    resourceId: 1
  },
  {
    id: 18,
    taskId: 23,
    resourceId: 1
  },
  {
    id: 19,
    taskId: 24,
    resourceId: 1
  },
  {
    id: 20,
    taskId: 24,
    resourceId: 2
  },
  {
    id: 21,
    taskId: 27,
    resourceId: 4
  },
  {
    id: 22,
    taskId: 28,
    resourceId: 4
  },
  {
    id: 23,
    taskId: 29,
    resourceId: 4
  },
  {
    id: 24,
    taskId: 30,
    resourceId: 4
  },
  {
    id: 25,
    taskId: 31,
    resourceId: 4
  },
  {
    id: 26,
    taskId: 34,
    resourceId: 5
  },
  {
    id: 27,
    taskId: 35,
    resourceId: 5
  },
  {
    id: 28,
    taskId: 37,
    resourceId: 5
  },
  {
    id: 29,
    taskId: 38,
    resourceId: 5
  },
  {
    id: 30,
    taskId: 39,
    resourceId: 5
  },
  {
    id: 31,
    taskId: 40,
    resourceId: 5
  },
  {
    id: 32,
    taskId: 41,
    resourceId: 5
  },
  {
    id: 33,
    taskId: 44,
    resourceId: 5
  },
  {
    id: 34,
    taskId: 45,
    resourceId: 5
  },
  {
    id: 35,
    taskId: 46,
    resourceId: 5
  },
  {
    id: 36,
    taskId: 47,
    resourceId: 5
  },
  {
    id: 37,
    taskId: 50,
    resourceId: 6
  },
  {
    id: 38,
    taskId: 51,
    resourceId: 6
  },
  {
    id: 39,
    taskId: 52,
    resourceId: 6
  },
  {
    id: 40,
    taskId: 53,
    resourceId: 6
  },
  {
    id: 41,
    taskId: 54,
    resourceId: 6
  },
  {
    id: 42,
    taskId: 55,
    resourceId: 6
  },
  {
    id: 43,
    taskId: 56,
    resourceId: 6
  },
  {
    id: 44,
    taskId: 59,
    resourceId: 7
  },
  {
    id: 45,
    taskId: 60,
    resourceId: 7
  },
  {
    id: 46,
    taskId: 61,
    resourceId: 7
  },
  {
    id: 47,
    taskId: 62,
    resourceId: 7
  },
  {
    id: 48,
    taskId: 63,
    resourceId: 7
  },
  {
    id: 49,
    taskId: 64,
    resourceId: 7
  },
  {
    id: 50,
    taskId: 65,
    resourceId: 7
  },
  {
    id: 51,
    taskId: 66,
    resourceId: 7
  },
  {
    id: 52,
    taskId: 69,
    resourceId: 2
  },
  {
    id: 53,
    taskId: 71,
    resourceId: 8
  },
  {
    id: 54,
    taskId: 72,
    resourceId: 8
  },
  {
    id: 55,
    taskId: 73,
    resourceId: 8
  },
  {
    id: 56,
    taskId: 76,
    resourceId: 8
  },
  {
    id: 57,
    taskId: 77,
    resourceId: 8
  },
  {
    id: 58,
    taskId: 78,
    resourceId: 8
  },
  {
    id: 59,
    taskId: 79,
    resourceId: 8
  },
  {
    id: 60,
    taskId: 80,
    resourceId: 8
  },
  {
    id: 61,
    taskId: 83,
    resourceId: 2
  },
  {
    id: 62,
    taskId: 84,
    resourceId: 2
  },
  {
    id: 63,
    taskId: 85,
    resourceId: 2
  }
];

export class Company {
  ID: number;
  CompanyName: string;
  Address: string;
  City: string;
  State: string;
  Zipcode: number;
  Phone: string;
  Fax: string;
  Website: string;
}

let companies: Company[] = [{
  "ID": 1,
  "CompanyName": "Super Mart of the West",
  "Address": "702 SW 8th Street",
  "City": "Bentonville",
  "State": "Arkansas",
  "Zipcode": 72716,
  "Phone": "(800) 555-2797",
  "Fax": "(800) 555-2171",
  "Website": "http://www.nowebsitesupermart.com"
}, {
  "ID": 2,
  "CompanyName": "Electronics Depot",
  "Address": "2455 Paces Ferry Road NW",
  "City": "Atlanta",
  "State": "Georgia",
  "Zipcode": 30339,
  "Phone": "(800) 595-3232",
  "Fax": "(800) 595-3231",
  "Website": "http://www.nowebsitedepot.com"
}, {
  "ID": 3,
  "CompanyName": "K&S Music",
  "Address": "1000 Nicllet Mall",
  "City": "Minneapolis",
  "State": "Minnesota",
  "Zipcode": 55403,
  "Phone": "(612) 304-6073",
  "Fax": "(612) 304-6074",
  "Website": "http://www.nowebsitemusic.com"
}, {
  "ID": 4,
  "CompanyName": "Tom's Club",
  "Address": "999 Lake Drive",
  "City": "Issaquah",
  "State": "Washington",
  "Zipcode": 98027,
  "Phone": "(800) 955-2292",
  "Fax": "(800) 955-2293",
  "Website": "http://www.nowebsitetomsclub.com"
}];

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor() {}

  getSales() {
    return sales;
  }

  getDataSource() {
    return new DataSource({
      store: {
        type: "odata",
        url: "https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes",
        beforeSend: function(request) {
          request.params.startDate = "2018-05-10";
          request.params.endDate = "2018-05-15";
        }
      }
    });
  }

  getTasks(): Task[] {
    return tasks.map(function(task: Task) {
      employees.forEach(function(employee: Employee) {
        if (task.Task_Assigned_Employee_ID === employee.ID) {
          task.Task_Assigned_Employee = employee;
        }
      });

      return task;
    });
  }

  getEmployees(): Employee[] {
    return employees;
  }

  getPriorities(): Priority[] {
    return priorities;
  }

  getEmployeesScheduler() {
    return employeesScheduler;
  }

  getData() {
    return data;
  }

  getComplaintsData(): ComplaintsWithPercent[] {
    var data = complaintsData.sort(function(a, b) {
        return b.count - a.count;
      }),
      totalCount = data.reduce(function(prevValue, item) {
        return prevValue + item.count;
      }, 0),
      cumulativeCount = 0;
    return data.map(function(item, index) {
      cumulativeCount += item.count;
      return {
        complaint: item.complaint,
        count: item.count,
        cumulativePercent: Math.round((cumulativeCount * 100) / totalCount)
      };
    });
  }
  getTasksGantt(): TaskGantt[] {
    return tasksGantt;
  }
  getDependencies(): Dependency[] {
    return dependencies;
  }
  getResources(): Resource[] {
    return resources;
  }
  getResourceAssignments(): ResourceAssignment[] {
    return resourceAssignments;
  }

  getCompanies(): Company[] {
    return companies;
}
}
