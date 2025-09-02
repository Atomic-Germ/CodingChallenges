#!/usr/bin/env python3

import random

def generate_hex(color):
    def main_color():
        return str(random.randint(0,255)).zfill(2)

    def sub_color(digits):
        return str(random.randint(0,99)).zfill(digits)

    switcher = {
        "red": main_color() + sub_color(4),
        "green": sub_color(2) + main_color() + sub_color(2),
        "blue": sub_color(4) + main_color(),
    }

    return switcher.get(color, "Invalid color")

print(generate_hex("red")) # It should return a red-dominant color in hex
print(generate_hex("green")) # It should return a green-dominant color in hex
print(generate_hex("blue")) # It should return a blue-dominant color in hex
print(generate_hex("yellow")) # It should return "Invalid color"

