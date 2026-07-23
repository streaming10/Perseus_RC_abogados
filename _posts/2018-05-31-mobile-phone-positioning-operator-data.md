---
layout: post
title: "Mobile terminal positioning: how to obtain the location data held by the operator"
description: "A legal-technical guide to requesting, by court order, the positioning data (LCS services and GMLC/SMLC network elements) stored by a mobile operator, and how it fits within Art. 588 septies b of the Spanish Criminal Procedure Act and the GDPR."
date: 2018-05-31
lang: en
author: "Luis Jurado Cano"
categories: ["Criminal law", "Cybercrime"]
tags: [positioning, electronic evidence, GDPR, judicial investigation, geolocation]
keywords: "mobile phone positioning, operator location data court order, 588 septies b, LCS GMLC SMLC, geolocation criminal investigation"
permalink: /en/blog/mobile-phone-positioning-operator-data/
alternate: /blog/posicionamiento-terminales-moviles-datos-operadora/
---

One of the great problems, from a legal standpoint, is the uncertainty surrounding requests to operators for the data they hold about a given mobile terminal — in this article, specifically the data relating to positioning.

Whether one is a judge, a prosecutor, a lawyer or a member of the security forces, this is a shared problem. There are no clear rules set at the statutory or case-law level as to what data the telephone operator must store and provide — in an understandable, legible form — on grounds of *public interest* (Art. 21.6 of the GDPR) in relation to a user under investigation in judicial proceedings.

To address it, one must first understand how a telephone network works.

## How does a telephone network work?

Broadly, an operator's mobile network is made up of **two parts**: first, a **network of antennas** — base stations — distributed across the territory; and second, the **mobile phones** — also called terminals or mobile stations — that access that network.

The operator's antenna network is divided into **cells**, which cover the space assigned to them. They are usually drawn as hexagons to simplify the diagram, although in reality the coverage areas of the different antennas tend to overlap.

The mobile terminal connects automatically to the nearest cell, from which it presumably obtains the best coverage (the strongest signal). For this to work, the operator must always know in which cell a device is switched on.

## How do we locate a device?

To obtain a mobile terminal's position we must consider the following list of positioning methods, depending on the technology used by the operator and the terminal. They are essentially divided into network-based methods and handset-based methods, although in practice several are combined to increase accuracy.

## Network-based methods

**Cell Global Identity (CGI):** provides the current cell position of the target mobile station based on the cell's global identity, or on the Location Area Code (LAC) plus the Cell Identity (CI).

**Timing Advance (TA):** calculates the mobile station's location by measuring the time for signal transfers from the mobile station to the base station.

**Time of Arrival (TOA):** the position is calculated from the signal sent by the mobile station to three Position Measurement Units (PMUs) whose geographic coordinates are already known.

**Angle of Arrival (AOA):** the position is calculated using smart base-station antenna arrays needed to measure the angle of the received signal.

**Time Difference of Arrival (TDOA):** the position is estimated by measuring the time difference of arrival between the signal received at the serving base station and the same transmission received at surrounding base stations.

## Handset-based methods

**E-OTD (Enhanced Observed Time Difference):** the handset-based alternative to uplink TDOA (U-TDOA). It requires at least three antennas, computing the position from Observed Time Difference (OTD), Real Time Difference (RTD) and Geometric Time Difference (GTD).

**Assisted GPS (A-GPS):** provides the most accurate position of a mobile terminal, with an approximate range of 10 metres, based on the radio signals sent by satellites to the receiver (the mobile terminal). Satellite location systems include **GPS, GLONASS and BEIDOU**.

Position can also be extracted from **Wi-Fi** using systems based on RSSI and lateration, fingerprinting, angle of arrival and time of flight (TOF) — particularly useful indoors, where the outdoor signal may be weaker.

If we focus on current network coverage technologies, we have the 2G (GSM), 3G (UMTS) and 4G (LTE) standards. The most basic standard every terminal supports is 2G (GSM), which has a set of parameters the operator must necessarily access — without them, communication across the network between antennas and terminals would not take place.

The positioning methods available across the different networks can therefore be summarised as:

## 2G — GERAN (GSM EDGE Radio Access Network)

- Cell-coverage-based positioning
- Enhanced Observed Time Difference (E-OTD)
- A-GNSS-based positioning
- Uplink Time Difference of Arrival (U-TDOA)

## 3G — UTRAN (UMTS Terrestrial Radio Access Network)

- Cell-coverage-based positioning
- OTDOA positioning
- A-GNSS-based positioning
- U-TDOA positioning

## 4G — E-UTRAN (Evolved UMTS Terrestrial Radio Access Network)

- Uplink and downlink cell-coverage-based positioning
- OTDOA positioning
- A-GNSS-based positioning
- U-TDOA positioning

## What has been happening so far?

When, through a court order, the investigating judge, the prosecution, specialised police units or the lawyers in the proceedings requested information on the positioning of a given mobile terminal, operators would normally hand over only the *connection and disconnection data to the cells they own within a specific time range*. But that data alone is usually not enough to calculate a terminal's position precisely. Hence the importance of knowing what other parameters are available — and which could be implemented in the future — to make positioning far more accurate.

## What technical objections can the operator raise?

The answer is usually simple: "our systems do not hold that parameter in the log." Yet today it would be surprising if such data were neither received nor processed by their systems, given the high value of positioning data in marketing — a telephone company can tailor its services or offer that data to third parties depending on where a user is located at a given moment.

## What is the real problem ahead?

As noted, **Art. 21.6 of the GDPR** states that where personal data are processed for scientific or historical research or statistical purposes, the data subject has the right, on grounds relating to their particular situation, to object to the processing of personal data concerning them, *unless the processing is necessary for the performance of a task carried out for reasons of **public interest***.

There are therefore only **two types of data**: **private** or **public interest**. Common practice holds that, within a judicial investigation, operators must store and provide data such as ID number, IMEI, phone number, and connection/disconnection data to their cells. But **what about the remaining parameters relating to position?** Are they private or public-interest data?

There would be two possible answers — one favouring security, the other privacy.

Under the **first**, the data from the parameters above — needed to calculate a terminal's position more accurately — would be *public interest*, and therefore not subject to the data subject's *right to object*, on the understanding that they are necessary to protect society's most important legal interests. In that case, if the operator fails to cooperate, under **Art. 588 septies b** it could incur an **offence of disobedience**, and if it deleted data, the offence under **Arts. 264 and 264 bis of the Criminal Code**. The Data Protection Officer (DPO) or the responsible person must prevent this, or risk liability under Art. 31 bis of the Criminal Code. Such data must also be delivered in a form that is comprehensible and useful.

Under the **second**, if position data are deemed *private*, the data subject may exercise their right to *object to the processing of personal data concerning them*, as well as the right of access (Art. 15 GDPR), rectification or erasure.

This can be seen graphically in a hypothetical case: an individual who has attacked another person's life while carrying their mobile terminal could, moments later, call their operator to exercise their Art. 21 GDPR rights, and the operator would have to comply if it considers the data *private*. But if the data were deemed *public interest*, then, upon the proper judicial investigation and the judge's request, that data could — with high precision — establish whether the terminal associated with a suspect was at the scene, providing indications that shed light on what happened and help reach the truth.

## How, then, should it be requested by court order?

For an operator to hand over a user's data, the request must state precisely what is sought. Where the aim is the positioning data associated with a given terminal and user, the most correct wording will be:

> To request the location data and metadata that the mobile telecommunications operator holds, or has collected, from the network elements associated with Location Services (LCS) — such as the GMLC (Gateway Mobile Location Centre), the SMLC (Serving Mobile Location Centre) or any other specifically required (see list above).
> Both Location Services (LCS) and the GMLC and SMLC network elements are defined in the standards published by the 3GPP (3rd Generation Partnership Project), the organisation responsible worldwide for the standards governing 2G, 3G and 4G mobile communications, which are publicly available at [http://www.3gpp.org](http://www.3gpp.org/).

The **creation of clear guidelines** on the positioning parameters (and other data) that can be requested and provided within a judicial investigation by operators and other companies handling such data will help strengthen the Spanish legal system, preventing those companies from becoming, through their lack of diligence, *de facto judges*.

Special thanks for the technical advice of David Pérez and José Picó of Layakk Ingeniería, Juan Antonio Frago (economic-crime prosecutor) and Silvia Barrera (National Police inspector).

This article, of my authorship, was originally published (in Spanish) in Legaltoday, Aranzadi–Thomson Reuters, on 31 May 2018.
[Original article in Spanish](https://www.legaltoday.com/practica-juridica/derecho-publico/proteccion-datos/nuevos-avances-en-la-investigacion-judicial-el-posicionamiento-de-terminales-moviles-como-obtener-los-datos-que-posee-la-operadora-2018-05-31/)
