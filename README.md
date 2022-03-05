<div align="center">

<img src="https://raw.githubusercontent.com/AcknologyHQ/impact-hugo/main/images/icon.png" height="80">

# Impact Theme


**Beautiful and elegant company landing page theme**

This is a simple and minimalistic UI theme for [hugo](https://gohugo.io/) made with [bulma](https://bulma.io/)

[![license](https://img.shields.io/badge/license-MIT-blue.svg?logo=github)](https://github.com/AcknologyHQ/impact-hugo/blob/main/LICENSE.txt)

</div>

<br>

**Screenshots**

TODO: add screenshots

<br>

**Demo**

check out the [**DEMO**](https://acknologyhq.github.io/impact-hugo/)

<br>

**Installation**

Add this theme to your hugo projects `themes` directory

```bash
$ git submodule add https://github.com/AcknologyHQ/impact-hugo.git themes/impact
```

<br>

**Example Config**

yaml is used here insted of toml feel free to check `config.toml` for toml example

```yaml
# example config.yaml file

baseurl: "https://example.com"
languageCode: 'en-us'
title: 'Impact Theme'
googleAnalytics: 'UA-XXXXX-X'

theme: "impact"

# +++++ Theme Config +++++



```

<br>

**Development**

```bash
# clone the repo
$ git clone https://github.com/AcknologyHQ/impact-hugo.git

# cd into the repo
$ cd impact-hugo

# run using docker-compose
$ CURRENT_UID="$(id -u):$(id -g)" docker-compose up --force-recreate -d  server
```

navigate to `http://localhost:1313`


<br>

**LICENSE**

`Copyright (c) 2022 Acknology Co.`

Licensed under **MIT LICENSE** read full text [here](https://github.com/AcknologyHQ/impact-hugo/blob/main/LICENSE.txt)

<br>