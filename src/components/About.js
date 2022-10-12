import React from "react";
import Footer from "./Footer";
import Accordion from 'react-bootstrap/Accordion';

function About() {
  return (
    <>
    <Accordion defaultActiveKey={['0']} alwaysOpen className="about">
      <Accordion.Item eventKey="0"> 
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        The Samsung Galaxy S7, Samsung Galaxy S7 Edge and Samsung Galaxy S7 Active are Android-based smartphones manufactured, released and marketed by Samsung Electronics. The S7 series serves as the successor to the Galaxy S6, S6 Edge, S6 Edge+ and S6 Active released in 2015. The S7 and S7 Edge were officially unveiled on 21 February 2016 during a Samsung press conference at Mobile World Congress, with a European and North American release on 11 March 2016. The S7 Active was unveiled on 4 June 2016, and released on AT&T in the United States on 10 June 2016.[2]

The Galaxy S7 is an evolution of the prior year's model, with upgraded hardware, design refinements, and the restoration of features removed from the Galaxy S6, such as IP certification for water and dust resistance, as well as expandable storage with a MicroSD card. Succeeding the S6 and S6 Edge+, respectively, the S7 is produced in a standard model with a display size of 5.1-inch (130 mm) as well as an Edge variant whose display is curved along the wide sides of the screen and also has a larger 5.5-inch (140 mm) display. The S7 Active features a thicker more rugged frame and an increased battery capacity. The Galaxy S7 and S7 Edge are the last two phones in the Samsung Galaxy S series to have a physical home button with a front-sided fingerprint sensor embedded in the button. The S7 Active is the last in the Active series to feature three physical buttons with the fingerprint reader embedded home button, when not considering the prematurely discontinued Galaxy Note 7. It is the last phone in the Samsung Galaxy S series to be equipped with a MicroUSB-B port, which has since been replaced with USB-C technology.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        The Pixel 6 and Pixel 6 Pro are a pair of Android smartphones designed, developed, and marketed by Google as part of the Google Pixel product line. They collectively serve as the successor to the Pixel 5. The phones were first previewed in August 2021, confirming reports that they would be powered by a custom system-on-chip named Google Tensor. The cameras are housed in a horizontal bar on the back, while the front features a hole-punch display notch in the center. They shipped with Android 12, with Google announcing numerous artificial intelligence and ambient computing features during the phones' launch event.

The Pixel 6 and Pixel 6 Pro were officially announced on October 19, 2021, at the Pixel Fall Launch event, and were released in the United States on October 28, following an extensive marketing campaign. They received generally positive reviews from critics, who praised its Tensor chip, cameras, performance, design, and price, though the fingerprint sensor and battery life received mixed reactions. The phones became Google's fastest-selling Pixel devices, allowing the company to become the fifth-largest smartphone manufacturer in North America and the United Kingdom during the first quarter of 2022. They were succeeded by the Pixel 7 and Pixel 7 Pro in 2022.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
        Xiaomi Redmi Note 2 mobile was launched in August 2015. The phone comes with a 5.50-inch touchscreen display offering a resolution of 1080x1920 pixels at a pixel density of 400 pixels per inch (ppi). Xiaomi Redmi Note 2 is powered by a 2GHz octa-core MediaTek Helio X10 (MT6795) processor. It comes with 2GB of RAM. The Xiaomi Redmi Note 2 runs Android 5.0 and is powered by a 3060mAh removable battery.

As far as the cameras are concerned, the Xiaomi Redmi Note 2 on the rear packs 13-megapixel camera. It sports a 5-megapixel camera on the front for selfies.

The Xiaomi Redmi Note 2 runs MIUI 7 is based on Android 5.0 and packs 16GB of inbuilt storage that can be expanded via microSD card (up to 32GB). The Xiaomi Redmi Note 2 is a dual-SIM (GSM and GSM) mobile that accepts Micro-SIM and Micro-SIM cards. The Xiaomi Redmi Note 2 measures 152.00 x 76.00 x 8.25mm (height x width x thickness) and weighs 160.00 grams. It was launched in White, Blue, Yellow, and Pink colours.

Connectivity options on the Xiaomi Redmi Note 2 include Wi-Fi, GPS, Bluetooth v4.00, Infrared, FM radioWi-Fi Direct, 3G, and 4G (with support for Band 40 used by some LTE networks in India). Sensors on the phone include accelerometer, ambient light sensor, gyroscope, proximity sensor, and compass/ magnetometer.
 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   <Footer />
  </>
   );
}

export default About;
