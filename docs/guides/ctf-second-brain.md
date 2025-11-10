---
title: Accumulated CTF knowledge and tools
tags:
  - Advanced
  - Lunear's Notebook
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
- [CyberChief](https://gchq.github.io/CyberChef/): For Encrpytion and Decryption

## General Knowledge

- **Base64 encoding:** transforms any binary data (like images or files) into a string of printable ASCII characters
- **Steganography** method that hides information in a non-secret file such as an image, or audio. The existence of the hidden message is unobservable to the viewer. Some of the most common techniques used includes LSB (least significant bit).
- **Hash**: Hash encryption generates a unique hashcode for each piece of data. It is often used to check file integrity by comparing the hash value of the package being installed and the original package to prevent potential modifications from unauthorized parties. Given a hashed value, to try to get the original value, we can use wordlist and word maps and try all different cobinations to get their hashcode and comparing to the given hashed value. This is called bruceforce attacking/guess and checking.

## Forensics

:::::collapse accordion

- Tools

  - Image analysis:

    - `zsteg`: Package based on Ruby allows user to check metadata of images and steganography; specifically for `.png` and `,bmp` images. It analyzes images to detect hidden data and extract hiddien information on least significant and other steganography techniques.
    - `steghide`: Steganography tool used to hide/reveal hidden data in images/audio files; mostly used with `.jpeg`, `.bmp`, `.wav`, and `.au` files.
    - `identify`: Tool from ImageMagick, used to analyze and display information about image files such as image format, dimensions, file size, medatadata and properties.

  - Skills:

    - Converting files to `base64` and to an image file
    - ```bash
      # -d stands for decode
      cat file.txt | base64 -d > file.jpeg
      ```

:::::

## Cryptography

:::::collapse accordion

- Tools
  - Hashcracking:
    - `hashcat`: GPU-accelerated tool for hashcracking such as SHA1, SHA2-256, MD5, bcrypt.
      ```bash
      hashcat -m (hashtype: 0 = MD5, 100 = SHA1, 1400 = SHA2-256, 3200 = bcrypt) -a 0 (hashed text) (wordlist path)
      ```

:::::
