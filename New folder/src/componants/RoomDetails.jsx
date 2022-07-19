import React from "react";
import Rooms from "./Rooms";
import { v4 as uuid } from "uuid";
let roomData = [
  {
    id: uuid(),
    a: "220 sq ft",
    b: "Sleeps 3",
    c: "1 King Bed OR Twin Beds",
    d: "Free high-speed internet",
    e: "Free self Parking",
    f: "Breakfast buffet",
    g: "+$0",
    h: "Breakfast buffet + Airport shuttle",
    i: "+$40",
    j: "Half-board + Special deal More Details",
    k: "+$50",
    l: "Full board + Special deal More Details",
    m: "+$32",
    n: "Resort credit + Special deal More Details",
    o: "+$97",
  },

  {
    id: uuid(),
    a: "220 sq ft",
    b: "Sleeps 3",
    c: "1 King Bed OR Twin Beds",
    d: "Free high-speed internet",
    e: "Free self Parking",
    f: "Breakfast buffet",
    g: "+$0",
    h: "Breakfast buffet + Airport shuttle",
    i: "+$40",
    j: "Half-board + Special deal More Details",
    k: "+$50",
    l: "Full board + Special deal More Details",
    m: "+$32",
    n: "Resort credit + Special deal More Details",
    o: "+$97",
  },
  {
    id: uuid(),
    a: "220 sq ft",
    b: "Sleeps 3",
    c: "1 King Bed OR Twin Beds",
    d: "Free high-speed internet",
    e: "Free self Parking",
    f: "Breakfast buffet",
    g: "+$0",
    h: "Breakfast buffet + Airport shuttle",
    i: "+$40",
    j: "Half-board + Special deal More Details",
    k: "+$50",
    l: "Full board + Special deal More Details",
    m: "+$32",
    n: "Resort credit + Special deal More Details",
    o: "+$97",
  },

  {
    id: uuid(),
    a: "220 sq ft",
    b: "Sleeps 3",
    c: "1 King Bed OR Twin Beds",
    d: "Free high-speed internet",
    e: "Free self Parking",
    f: "Breakfast buffet",
    g: "+$0",
    h: "Breakfast buffet + Airport shuttle",
    i: "+$40",
    j: "Half-board + Special deal More Details",
    k: "+$50",
    l: "Full board + Special deal More Details",
    m: "+$32",
    n: "Resort credit + Special deal More Details",
    o: "+$97",
  },
  {
    id: uuid(),
    a: "220 sq ft",
    b: "Sleeps 3",
    c: "1 King Bed OR Twin Beds",
    d: "Free high-speed internet",
    e: "Free self Parking",
    f: "Breakfast buffet",
    g: "+$0",
    h: "Breakfast buffet + Airport shuttle",
    i: "+$40",
    j: "Half-board + Special deal More Details",
    k: "+$50",
    l: "Full board + Special deal More Details",
    m: "+$32",
    n: "Resort credit + Special deal More Details",
    o: "+$97",
  },
  {
    id: uuid(),
    a: "220 sq ft",
    b: "Sleeps 3",
    c: "1 King Bed OR Twin Beds",
    d: "Free high-speed internet",
    e: "Free self Parking",
    f: "Breakfast buffet",
    g: "+$0",
    h: "Breakfast buffet + Airport shuttle",
    i: "+$40",
    j: "Half-board + Special deal More Details",
    k: "+$50",
    l: "Full board + Special deal More Details",
    m: "+$32",
    n: "Resort credit + Special deal More Details",
    o: "+$97",
  },
  {
    id: uuid(),
    a: "220 sq ft",
    b: "Sleeps 3",
    c: "1 King Bed OR Twin Beds",
    d: "Free high-speed internet",
    e: "Free self Parking",
    f: "Breakfast buffet",
    g: "+$0",
    h: "Breakfast buffet + Airport shuttle",
    i: "+$40",
    j: "Half-board + Special deal More Details",
    k: "+$50",
    l: "Full board + Special deal More Details",
    m: "+$32",
    n: "Resort credit + Special deal More Details",
    o: "+$97",
  },
  {
    id: uuid(),
    a: "220 sq ft",
    b: "Sleeps 3",
    c: "1 King Bed OR Twin Beds",
    d: "Free high-speed internet",
    e: "Free self Parking",
    f: "Breakfast buffet",
    g: "+$0",
    h: "Breakfast buffet + Airport shuttle",
    i: "+$40",
    j: "Half-board + Special deal More Details",
    k: "+$50",
    l: "Full board + Special deal More Details",
    m: "+$32",
    n: "Resort credit + Special deal More Details",
    o: "+$97",
  },
  {
    id: uuid(),
    a: "220 sq ft",
    b: "Sleeps 3",
    c: "1 King Bed OR Twin Beds",
    d: "Free high-speed internet",
    e: "Free self Parking",
    f: "Breakfast buffet",
    g: "+$0",
    h: "Breakfast buffet + Airport shuttle",
    i: "+$40",
    j: "Half-board + Special deal More Details",
    k: "+$50",
    l: "Full board + Special deal More Details",
    m: "+$32",
    n: "Resort credit + Special deal More Details",
    o: "+$97",
  },
  {
    id: uuid(),
    a: "220 sq ft",
    b: "Sleeps 3",
    c: "1 King Bed OR Twin Beds",
    d: "Free high-speed internet",
    e: "Free self Parking",
    f: "Breakfast buffet",
    g: "+$0",
    h: "Breakfast buffet + Airport shuttle",
    i: "+$40",
    j: "Half-board + Special deal More Details",
    k: "+$50",
    l: "Full board + Special deal More Details",
    m: "+$32",
    n: "Resort credit + Special deal More Details",
    o: "+$97",
  },
  {
    id: uuid(),
    a: "220 sq ft",
    b: "Sleeps 3",
    c: "1 King Bed OR Twin Beds",
    d: "Free high-speed internet",
    e: "Free self Parking",
    f: "Breakfast buffet",
    g: "+$0",
    h: "Breakfast buffet + Airport shuttle",
    i: "+$40",
    j: "Half-board + Special deal More Details",
    k: "+$50",
    l: "Full board + Special deal More Details",
    m: "+$32",
    n: "Resort credit + Special deal More Details",
    o: "+$97",
  },
];

const Roomdetails = () => {
  return (
    <>
      {roomData.map((el) => {
        // console.log("elem", el);
        return <Rooms key={el.id} el={el} />;
      })}
    </>
  );
};

export default Roomdetails;