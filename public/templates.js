function grudgeListTemplate(id, name) {
  return `<article class="burn-item">
    <a href=/${id}>
      <h4>
        <span class="burn-category" class="name" id=${id}>
          Name:
        </span>
        ${name}
      </h4>
    </a>
    </article>`
}

function individualGrudgeTemplate(name, offense, date, status, id) {
  return `<article class="individual-grudge">
    <h4>
      <span class="burn-category" class="name">
        Name:
      </span>
      ${name}
    </h4>
    <p>
      <span class="burn-category" class="offense">
        Offense:
      </span>
      ${offense}
    </p>
    <p>
      <span class="burn-category">
        Date Added:
      </span>
      ${date}
    </p>
    <p>
      <span class="burn-category"> Forgiven: </span>
      ${status}
    </p>
    <input class="forgive-btn" onClick="updateForgivenessStatus(${id})" type="submit" value="Forgive"/>
    </article>`
}
