const grounds = [
  [
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 50, 58, 58, 58, 58, 58, 58, 42, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 21, 40, 28, 28, 28, 57, 62, 62, 60, 58, 58, 42, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 17, 16, 16, 16, 23, 28, 28, 28, 28, 28, 20, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16
  ],
  [
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 50, 42, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 50, 61, 60, 42, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 23, 57, 62, 60, 42, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 23, 57, 62, 60, 58, 42, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 52, 62, 62, 62, 60, 42, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 52, 62, 62, 62, 49, 20, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 50, 61, 62, 62, 62, 44, 16, 16, 16,
    16, 16, 16, 21, 37, 18, 16, 16, 16, 16, 16, 52, 62, 62, 62, 49, 20, 16, 16, 16,
    16, 16, 16, 16, 17, 16, 16, 16, 16, 16, 16, 52, 62, 62, 49, 20, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 23, 57, 49, 20, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 23, 20, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16
  ],
  [
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 50, 58, 58, 58, 58, 58, 58, 42, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 50, 61, 62, 62, 62, 62, 62, 62, 60, 58, 58, 58, 42, 16, 16, 16, 16,
    16, 16, 16, 23, 57, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 60, 42, 16, 16, 16,
    16, 16, 16, 16, 52, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 44, 16, 16, 16,
    16, 16, 16, 16, 23, 57, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 44, 16, 16, 16,
    16, 16, 16, 16, 16, 52, 62, 62, 62, 62, 62, 62, 62, 62, 62, 49, 20, 16, 16, 16,
    16, 16, 16, 16, 16, 23, 57, 62, 62, 62, 62, 62, 62, 62, 49, 20, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 23, 28, 57, 62, 62, 62, 62, 49, 20, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 23, 28, 28, 28, 28, 20, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16
  ],
  [
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 50, 58, 58, 58, 42, 16, 16, 16, 50, 58, 58, 42, 16, 16, 16, 16, 16,
    16, 16, 50, 61, 62, 62, 62, 60, 58, 58, 58, 61, 62, 62, 60, 42, 16, 16, 16, 16,
    16, 16, 23, 57, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 44, 16, 16, 16, 16,
    16, 16, 16, 23, 28, 57, 62, 62, 62, 62, 62, 62, 62, 62, 62, 44, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 23, 57, 62, 62, 62, 62, 62, 62, 62, 62, 44, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 52, 62, 62, 62, 62, 62, 62, 62, 62, 60, 42, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 52, 62, 62, 62, 62, 62, 62, 62, 62, 49, 20, 16, 16, 16,
    16, 16, 16, 16, 16, 21, 40, 28, 28, 28, 28, 28, 28, 28, 28, 20, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16
  ],
  [
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 50, 58, 42, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 50, 58, 58, 58, 61, 62, 60, 42, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 50, 61, 62, 62, 62, 62, 62, 49, 20, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 50, 61, 62, 62, 62, 62, 62, 49, 20, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 50, 61, 62, 49, 28, 57, 62, 62, 44, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 50, 61, 62, 62, 44, 16, 52, 62, 62, 60, 42, 16, 16, 16, 16, 16, 16,
    16, 16, 50, 61, 62, 62, 62, 60, 58, 61, 62, 62, 62, 60, 58, 58, 42, 16, 16, 16,
    16, 16, 52, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 60, 42, 16, 16,
    16, 16, 23, 57, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 49, 20, 16, 16,
    16, 16, 16, 23, 28, 28, 57, 62, 62, 62, 62, 62, 62, 49, 28, 28, 20, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 23, 28, 28, 28, 28, 28, 28, 20, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16
  ]
]

export {
  grounds
}
