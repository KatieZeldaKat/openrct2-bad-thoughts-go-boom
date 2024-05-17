import { thoughtIsNegative } from "./thoughts";

const tickFrequency = 256;

const queueAdd: number[] = [];
const queueRemove: number[] = [];

let guests: number[] = [];
let queueExplode: number[] = [];

export function initialize() {
    guests = map
        .getAllEntities("guest")
        .filter((guest) => guest.id !== null)
        .map((guest) => guest.id as number);

    context.subscribe("guest.generation", (e) => queueAdd.push(e.id));
    context.subscribe("interval.tick", () => processGuests());
}

function processGuests() {
    const tick = date.ticksElapsed % tickFrequency;
    if (tick === 0) {
        updateQueues();
    }

    for (let index = tick; index < guests.length; index += tickFrequency) {
        processGuest(guests[index]);
    }
}

function updateQueues() {
    queueAdd.forEach((id) => guests.push(id));
    queueRemove.forEach((id) => guests.splice(guests.indexOf(id), 1));

    // Clear queues after processing
    queueExplode = queueExplode.filter((id) => queueRemove.indexOf(id) >= 0);
    queueAdd.splice(0, queueAdd.length);
    queueRemove.splice(0, queueRemove.length);
}

function processGuest(id: number) {
    const guest = map.getEntity(id) as Guest;
    if (guest === null) {
        queueRemove.push(id);
    } else if (queueExplode.indexOf(id) >= 0) {
        guest.setFlag("explode", true);
    } else if (guest.thoughts !== undefined) {
        guest.thoughts.forEach((thought) => {
            if (thoughtIsNegative(thought.type)) {
                queueExplode.push(id);
                guest.setFlag("explode", true);
            }
        });
    }
}
