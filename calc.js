const vcpu_count = document.getElementById("vcpu");
const vcpu_price = document.getElementById("vcpu-price");

const ram_count = document.getElementById("ram");
const ram_price = document.getElementById("ram-price");

const hdd7k_count = document.getElementById("hdd7k");
const hdd7k_price = document.getElementById("hdd7k-price");

const hdd10k_count = document.getElementById("hdd10k");
const hdd10k_price = document.getElementById("hdd10k-price");

const hdd15k_count = document.getElementById("hdd15k");
const hdd15k_price = document.getElementById("hdd15k-price");

const ssd_count = document.getElementById("ssd");
const ssd_price = document.getElementById("ssd-price");

const tasix_speed = document.getElementById("tas-ix");
const tasix_price = document.getElementById("tasix-price");

const world_speed = document.getElementById("world");
const world_price = document.getElementById("world-price");

const summ = document.getElementById("summ");

summ.innerText =
  Number(vcpu_price.innerText.split("$")[0]) +
  Number(ram_price.innerText.split("$")[0]) +
  Number(world_price.innerText.split("$")[0]) +
  Number(hdd7k_price.innerText.split("$")[0]) +
  Number(hdd10k_price.innerText.split("$")[0]) +
  Number(ssd_price.innerText.split("$")[0]) +
  Number(hdd15k_price.innerText.split("$")[0]) +
  Number(tasix_price.innerText.split("$")[0]) +
  "$";

vcpu_count.oninput = (e) => {
  const count = Number(e.target.value);
  switch (count) {
    case 0:
      vcpu_count.value = 1;
      vcpu_price.innerText = 20 + "$";
      break;
    case 1:
      vcpu_price.innerText = 20 + "$";
  }
  if (!isNaN(count) && count !== 0) {
    vcpu_price.innerText = count * 20 + "$";
  }
  summ.innerText =
    Number(vcpu_price.innerText.split("$")[0]) +
    Number(ram_price.innerText.split("$")[0]) +
    Number(world_price.innerText.split("$")[0]) +
    Number(hdd7k_price.innerText.split("$")[0]) +
    Number(hdd10k_price.innerText.split("$")[0]) +
    Number(ssd_price.innerText.split("$")[0]) +
    Number(hdd15k_price.innerText.split("$")[0]) +
    Number(tasix_price.innerText.split("$")[0]) +
    " $";
};

ram_count.oninput = (e) => {
  const count = Number(e.target.value);
  switch (count) {
    case 0:
      ram_count.value = 1;
      ram_price.innerText = 20 + "$";
      break;
    case 1:
      ram_price.innerText = 20 + "$";
  }
  if (!isNaN(count) && count !== 0) {
    ram_price.innerText = count * 20 + "$";
  }
  summ.innerText =
    Number(vcpu_price.innerText.split("$")[0]) +
    Number(ram_price.innerText.split("$")[0]) +
    Number(world_price.innerText.split("$")[0]) +
    Number(hdd7k_price.innerText.split("$")[0]) +
    Number(hdd10k_price.innerText.split("$")[0]) +
    Number(ssd_price.innerText.split("$")[0]) +
    Number(hdd15k_price.innerText.split("$")[0]) +
    Number(tasix_price.innerText.split("$")[0]) +
    " $";
};

hdd7k_count.oninput = (e) => {
  const count = Number(e.target.value);
  if (!isNaN(count) && count !== 0) {
    hdd7k_price.innerText = count * 20 + "$";
  } else {
    hdd7k_price.innerText = "0$";
  }
  summ.innerText =
    Number(vcpu_price.innerText.split("$")[0]) +
    Number(ram_price.innerText.split("$")[0]) +
    Number(world_price.innerText.split("$")[0]) +
    Number(hdd7k_price.innerText.split("$")[0]) +
    Number(hdd10k_price.innerText.split("$")[0]) +
    Number(ssd_price.innerText.split("$")[0]) +
    Number(hdd15k_price.innerText.split("$")[0]) +
    Number(tasix_price.innerText.split("$")[0]) +
    "$";
};

hdd10k_count.oninput = (e) => {
  const count = Number(e.target.value);
  if (!isNaN(count) && count !== 0) {
    hdd10k_price.innerText = count * 20 + "$";
  } else {
    hdd10k_price.innerText = "0$";
  }
  summ.innerText =
    Number(vcpu_price.innerText.split("$")[0]) +
    Number(ram_price.innerText.split("$")[0]) +
    Number(world_price.innerText.split("$")[0]) +
    Number(hdd7k_price.innerText.split("$")[0]) +
    Number(hdd10k_price.innerText.split("$")[0]) +
    Number(ssd_price.innerText.split("$")[0]) +
    Number(hdd15k_price.innerText.split("$")[0]) +
    Number(tasix_price.innerText.split("$")[0]) +
    "$";
};

hdd15k_count.oninput = (e) => {
  const count = Number(e.target.value);
  if (!isNaN(count) && count !== 0) {
    hdd15k_price.innerText = count * 20 + "$";
  } else {
    hdd15k_price.innerText = "0$";
  }
  summ.innerText =
    Number(vcpu_price.innerText.split("$")[0]) +
    Number(ram_price.innerText.split("$")[0]) +
    Number(world_price.innerText.split("$")[0]) +
    Number(hdd7k_price.innerText.split("$")[0]) +
    Number(hdd10k_price.innerText.split("$")[0]) +
    Number(ssd_price.innerText.split("$")[0]) +
    Number(hdd15k_price.innerText.split("$")[0]) +
    Number(tasix_price.innerText.split("$")[0]) +
    "$";
};

ssd_count.oninput = (e) => {
  const count = Number(e.target.value);
  if (!isNaN(count) && count !== 0) {
    ssd_price.innerText = count * 20 + "$";
  } else {
    ssd_price.innerText = "0$";
  }
  summ.innerText =
    Number(vcpu_price.innerText.split("$")[0]) +
    Number(ram_price.innerText.split("$")[0]) +
    Number(world_price.innerText.split("$")[0]) +
    Number(hdd7k_price.innerText.split("$")[0]) +
    Number(hdd10k_price.innerText.split("$")[0]) +
    Number(ssd_price.innerText.split("$")[0]) +
    Number(hdd15k_price.innerText.split("$")[0]) +
    Number(tasix_price.innerText.split("$")[0]) +
    "$";
};

tasix_speed.oninput = (e) => {
  const count = Number(e.target.value);
  if (!isNaN(count) && count !== 0) {
    tasix_price.innerText = count * 20 + "$";
  } else {
    tasix_price.innerText = "0$";
  }

  summ.innerText =
    Number(vcpu_price.innerText.split("$")[0]) +
    Number(ram_price.innerText.split("$")[0]) +
    Number(world_price.innerText.split("$")[0]) +
    Number(hdd7k_price.innerText.split("$")[0]) +
    Number(hdd10k_price.innerText.split("$")[0]) +
    Number(ssd_price.innerText.split("$")[0]) +
    Number(hdd15k_price.innerText.split("$")[0]) +
    Number(tasix_price.innerText.split("$")[0]) +
    "$";
};

world_speed.oninput = (e) => {
  const count = Number(e.target.value);
  if (!isNaN(count) && count !== 0) {
    world_price.innerText = count * 20 + "$";
  } else {
    world_price.innerText = "0$";
  }
  summ.innerText =
    Number(vcpu_price.innerText.split("$")[0]) +
    Number(ram_price.innerText.split("$")[0]) +
    Number(world_price.innerText.split("$")[0]) +
    Number(hdd7k_price.innerText.split("$")[0]) +
    Number(hdd10k_price.innerText.split("$")[0]) +
    Number(ssd_price.innerText.split("$")[0]) +
    Number(hdd15k_price.innerText.split("$")[0]) +
    Number(tasix_price.innerText.split("$")[0]) +
    "$";
};

function handleClick() {
  console.log("clicked");
}
