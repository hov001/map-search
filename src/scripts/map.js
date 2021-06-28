const chartId = 'chart-div'

function createMap(data) {
  document.getElementById('chart-div').innerHTML = ''
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_spiritedaway)
    am4core.useTheme(am4themes_animated)
    // Themes end

    // Create map instance
    var chart = am4core.create('chart-div', am4maps.MapChart)

    // Set map definition
    chart.geodata = am4geodata_worldLow

    // Set projection
    chart.projection = new am4maps.projections.Miller()
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries())

    // Exclude Antartica
    polygonSeries.exclude = ['AQ']

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template
    polygonTemplate.tooltipText = '{name}'
    polygonTemplate.polygon.fillOpacity = 0.6

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create('hover')
    hs.properties.fill = chart.colors.getIndex(0)

    // Add image series
    var imageSeries = chart.series.push(new am4maps.MapImageSeries())
    imageSeries.mapImages.template.propertyFields.longitude = 'longitude'
    imageSeries.mapImages.template.propertyFields.latitude = 'latitude'
    imageSeries.mapImages.template.tooltipText = '{title}'
    imageSeries.mapImages.template.propertyFields.url = 'url'

    var circle = imageSeries.mapImages.template.createChild(am4core.Circle)
    circle.radius = 3
    circle.propertyFields.fill = 'color'
    circle.nonScaling = true

    var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle)
    circle2.radius = 3
    circle2.propertyFields.fill = 'color'

    circle2.events.on('inited', function (event) {
      animateBullet(event.target)
    })

    function animateBullet(circle) {
      var animation = circle.animate(
        [
          {
            property: 'scale',
            from: 1 / chart.zoomLevel,
            to: 5 / chart.zoomLevel,
          },
          { property: 'opacity', from: 1, to: 0 },
        ],
        1000,
        am4core.ease.circleOut
      )
      animation.events.on('animationended', function (event) {
        animateBullet(event.target.object)
      })
    }

    var colorSet = new am4core.ColorSet()

    const els = data.map((el) => {
      return {
        title: el.name,
        latitude: el.latlng[0],
        longitude: el.latlng[1],
        color: colorSet.next(),
      }
    })
    imageSeries.data = els
  })
}
