import ChestImage from '@/assets/img/chest.jpg'
import BackImage from '@/assets/img/back.jpg'
import LegsImage from '@/assets/img/legs.jpg'

export const workoutTemplates = [
  {
    id: 1,
    title: "Push",
    uptitle: "Focus force",
    description: "Séance push avec un focus sur la force. Muscles ciblés : Pectoraux, triceps, épaules.",
    thumbnail: ChestImage,
    exercices: [
      {
        id: 1,
        name: "Écarté à la poulie",
        weight: 7.5,
        sets: 3,
        repsTarget: 15,
        restTime: 90,
      },
      {
        id: 2,
        name: "Chest press",
        weight: 82.5,
        sets: 2,
        repsTarget: 8,
        restTime: 180,
      },
      {
        id: 3,
        name: "Développé décliné",
        weight: 80,
        sets: 2,
        repsTarget: 8,
        restTime: 180,
      },
    ],
  },
  {
    id: 2,
    title: "Pull",
    uptitle: "Focus grand dorsal",
    description: "Séance pull avec un focus sur le grand dorsal. Muscles ciblés : Dos, biceps, avant-bras.",
    thumbnail: BackImage,
    exercices: [
      {
        id: 1,
        name: "Traction",
        weight: 10,
        sets: 3,
        repsTarget: 10,
        restTime: 180,
      },
      {
        id: 2,
        name: "Rowing bucheron",
        weight: 40,
        sets: 3,
        repsTarget: 12,
        restTime: 180,
      },
      {
        id: 3,
        name: "Tirage grand dorsal",
        weight: 30,
        sets: 3,
        repsTarget: 12,
        restTime: 180,
      },
    ],
  },
  {
    id: 3,
    title: "Legs",
    description: "Séance jambes globale. Muscles ciblées : Quadriceps, ischio-jambiers, fessiers.",
    thumbnail: LegsImage,
    exercices: [
      {
        id: 1,
        name: "Leg extension",
        weight: 95,
        sets: 3,
        repsTarget: 12,
        restTime: 180,
      },
      {
        id: 2,
        name: "Leg curl",
        weight: 60,
        sets: 3,
        repsTarget: 12,
        restTime: 180,
      },
      {
        id: 3,
        name: "Leg press",
        weight: 160,
        sets: 3,
        repsTarget: 12,
        restTime: 180,
      },
    ],
  },
]

export const workoutSessions = [
  {
    id: 1,
    templateId: 1,
    date: "2026-01-23",
    exercices: [
      {
        id: 1,
        name: "Écarté à la poulie",
        weight: 7.5,
        repsTarget: 15,
        restTime: 90,
        sets: [
          { reps: 15 },
          { reps: 13 },
          { reps: 12 },
        ],
      },
      {
        id: 2,
        name: "Chest press",
        weight: 82.5,
        repsTarget: 8,
        restTime: 180,
        sets: [
          { reps: 8 },
          { reps: 8 },
        ],
      },
      {
        id: 3,
        name: "Développé décliné",
        weight: 80,
        repsTarget: 8,
        restTime: 180,
        sets: [
          { reps: 7 },
          { reps: 7 },
        ],
      },
    ],
  },
  {
    id: 2,
    templateId: 2,
    date: "2026-01-24",
    exercices: [
      {
        id: 1,
        name: "Traction",
        weight: 10,
        sets: 3,
        repsTarget: 10,
        restTime: 180,
        sets: [
          { reps: 10 },
          { reps: 10 },
          { reps: 10 },
        ],
      },
      {
        id: 2,
        name: "Rowing bucheron",
        weight: 40,
        sets: 3,
        repsTarget: 12,
        restTime: 180,
        sets: [
          { reps: 12 },
          { reps: 11 },
          { reps: 10 },
        ],
      },
      {
        id: 3,
        name: "Tirage grand dorsal",
        weight: 30,
        sets: 3,
        repsTarget: 12,
        restTime: 180,
        sets: [
          { reps: 12 },
          { reps: 12 },
          { reps: 10 },
        ],
      },
    ],
  },
  {
    id: 3,
    templateId: null,
    date: "2026-01-27",
    title: "Full body",
    description: "Séance full body, groupe cibés : Pectoraux, dos, jambes.",
    thumbnail: null,
    exercices: [
      {
        id: 1,
        name: "Développé décliné",
        weight: 80,
        repsTarget: 8,
        restTime: 180,
        sets: [
          { reps: 7 },
          { reps: 7 },
        ],
      },
      {
        id: 2,
        name: "Traction",
        weight: 10,
        sets: 3,
        repsTarget: 10,
        restTime: 180,
        sets: [
          { reps: 10 },
          { reps: 10 },
          { reps: 10 },
        ],
      },
      {
        id: 3,
        name: "Leg press",
        weight: 160,
        repsTarget: 15,
        restTime: 180,
        sets: [
          { reps: 13 },
          { reps: 13 },
          { reps: 13 },
        ],
      },
    ],
  },
  {
    id: 4,
    templateId: 3,
    date: "2026-01-28",
    exercices: [
      {
        id: 1,
        name: "Leg extension",
        weight: 95,
        repsTarget: 12,
        restTime: 180,
        sets: [
          { reps: 12 },
          { reps: 12 },
          { reps: 10 },
        ],
      },
      {
        id: 2,
        name: "Leg curl",
        weight: 60,
        repsTarget: 12,
        restTime: 180,
        sets: [
          { reps: 12 },
          { reps: 11 },
          { reps: 10 },
        ],
      },
      {
        id: 3,
        name: "Leg press",
        weight: 160,
        sets: 3,
        repsTarget: 12,
        restTime: 180,
        sets: [
          { reps: 12 },
          { reps: 12 },
          { reps: 11 },
        ],
      },
    ],
  },
]