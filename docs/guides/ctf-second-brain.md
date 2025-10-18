---
title: Accumulated CTF knowledge and tools
tags:
  - Lunear Notebook
  - CTF
createTime: 2025/10/18 20:31:18
permalink: /guides/ctf-second-brain/
---

::::card-grid

:::card title="Author(s)" icon="fluent-emoji:writing-hand"
Lunear
:::
::::

## Resources

- [Picoctf](https://picoctf.org/): CMU founded CTF traning and learning platform great for "learn as you go."
- For Encrpytion and Decryption: [CyberChief](https://gchq.github.io/CyberChef/)

## General Knowledge

- **Base64 encoding:** transforms any binary data (like images or files) into a string of printable ASCII characters
- **Steganography** method that hides information in a non-secret file such as an image, or audio. The existence of the hidden message is unobservable to the viewer. Some of the most common techniques used includes LSB (least significant bit).

## Forensics

:::::collapse accordion

- Tools
  - Image analysis:
    - `zsteg`: Package based on Ruby allows user to check metadata of images and steganography; specifically for `.png` and `,bmp` images. It analyzes images to detect hidden data and extract hiddien information on least significant and other steganography techniques.
    - `steghide`: Steganography tool used to hide/reveal hidden data in images/audio files; mostly used with `.jpeg`, `.bmp`, `.wav`, and `.au` files.
    - `identify`: Tool from ImageMagick, used to analyze and display information about image files such as image format, dimensions, file size, medatadata and properties.

:::::
