export default function animals(req, res) {
    const animals = [
        'cat',
        'dog',
        'capybara',
        'ostrich',
        'penguin',
        'pangolin',
        'bull',
        'guinea pig',
        'armadillo'
    ]

    // get a random animal
    const random = animals[Math.floor(Math.random() * animals.length)]
    // res.status(200).json({ random:random })
    res.status(200).json({ random })
  }