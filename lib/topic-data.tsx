import type React from "react"
import { BarChart, BookOpen, DollarSign, TrendingUp } from "lucide-react"

export const topicData: Record<
  string,
  {
    title: string
    icon: React.ReactNode
    content: string[]
    videos: { title: string; url: string; duration: string }[]
    quiz: {
      question: string
      options: Record<string, string>
      correctAnswer: string
      explanation: string
    }[]
  }
> = {
  "supply-and-demand": {
    title: "Supply and Demand",
    icon: <TrendingUp className="h-8 w-8 text-emerald-500" />,
    content: [
      "Supply and demand is one of the most fundamental concepts in economics. It describes how prices are determined in a market economy and how buyers and sellers interact.",

      "The law of demand states that, all else being equal, as the price of a good increases, the quantity demanded decreases. This creates a downward-sloping demand curve. Consumers are willing to buy more at lower prices because it increases their consumer surplus - the difference between what they're willing to pay and what they actually pay.",

      "The law of supply states that, all else being equal, as the price of a good increases, the quantity supplied increases. This creates an upward-sloping supply curve. Producers are willing to sell more at higher prices because it increases their producer surplus - the difference between the market price and their cost of production.",

      "Market equilibrium occurs where the supply and demand curves intersect. At this point, the quantity demanded equals the quantity supplied, and there is no pressure for the price to change. If the price is above equilibrium, there's a surplus (excess supply), which puts downward pressure on prices. If the price is below equilibrium, there's a shortage (excess demand), which puts upward pressure on prices.",

      "Shifts in the supply or demand curves (as opposed to movements along the curves) occur when factors other than price change. For demand, these factors include income, preferences, prices of related goods, expectations, and number of buyers. For supply, these include technology, input prices, expectations, number of sellers, and government policies.",

      "Elasticity measures how responsive quantity is to changes in price. If a small change in price causes a large change in quantity, the good is elastic. If a large change in price causes only a small change in quantity, the good is inelastic. Necessities tend to be inelastic, while luxury goods tend to be elastic.",

      "Understanding supply and demand helps explain how markets allocate resources efficiently and how various factors can influence market outcomes. It's a powerful framework that forms the basis for much of economic analysis.",
    ],
    videos: [
      {
        title: "Supply and Demand: Crash Course Economics #4",
        url: "https://www.youtube.com/watch?v=g9aDizJpd_s",
        duration: "10:22",
      },
      {
        title: "The Economics of Supply and Demand",
        url: "https://www.youtube.com/watch?v=PNtKXWNKGN8",
        duration: "7:36",
      },
      {
        title: "Elasticity of Demand- Micro Topic 2.3",
        url: "https://www.youtube.com/watch?v=PEcYD8hpGqc",
        duration: "6:01",
      },
    ],
    quiz: [
      {
        question: "What happens to the demand curve when consumer income increases for a normal good?",
        options: {
          a: "The demand curve shifts to the right",
          b: "The demand curve shifts to the left",
          c: "There is movement along the demand curve",
          d: "The demand curve becomes steeper",
        },
        correctAnswer: "a",
        explanation:
          "For normal goods, an increase in consumer income causes the entire demand curve to shift to the right, indicating that consumers are willing to buy more at every price level.",
      },
      {
        question: "What is the law of supply?",
        options: {
          a: "As price increases, quantity demanded increases",
          b: "As price increases, quantity supplied increases",
          c: "As price increases, quantity supplied decreases",
          d: "As price decreases, quantity supplied increases",
        },
        correctAnswer: "b",
        explanation:
          "The law of supply states that, all else being equal, as the price of a good increases, the quantity supplied increases. This creates an upward-sloping supply curve.",
      },
      {
        question: "At market equilibrium:",
        options: {
          a: "There is excess supply",
          b: "There is excess demand",
          c: "Quantity supplied equals quantity demanded",
          d: "Prices are at their maximum possible level",
        },
        correctAnswer: "c",
        explanation:
          "Market equilibrium occurs at the intersection of supply and demand curves, where quantity supplied equals quantity demanded, and there is no pressure for the price to change.",
      },
      {
        question: "What happens when the market price is below the equilibrium price?",
        options: {
          a: "A surplus occurs",
          b: "A shortage occurs",
          c: "The market is in equilibrium",
          d: "Supply equals demand",
        },
        correctAnswer: "b",
        explanation:
          "When the market price is below equilibrium, quantity demanded exceeds quantity supplied, creating a shortage. This puts upward pressure on prices.",
      },
      {
        question: "Which of the following would cause a shift in the supply curve?",
        options: {
          a: "A change in the price of the good",
          b: "A change in consumer preferences",
          c: "A change in the price of inputs used in production",
          d: "A change in the quantity demanded",
        },
        correctAnswer: "c",
        explanation:
          "A change in input prices affects production costs, which shifts the entire supply curve. Changes in the price of the good itself cause movement along the existing supply curve, not a shift.",
      },
      {
        question: "If the price elasticity of demand for a good is 0.5, the demand is:",
        options: {
          a: "Perfectly elastic",
          b: "Elastic",
          c: "Unit elastic",
          d: "Inelastic",
        },
        correctAnswer: "d",
        explanation:
          "When the price elasticity of demand is less than 1 (in this case 0.5), demand is inelastic. This means that a percentage change in price causes a smaller percentage change in quantity demanded.",
      },
      {
        question: "What happens to the equilibrium price when both supply and demand increase?",
        options: {
          a: "It definitely increases",
          b: "It definitely decreases",
          c: "It remains unchanged",
          d: "It could either increase or decrease, depending on the relative size of the shifts",
        },
        correctAnswer: "d",
        explanation:
          "When both supply and demand increase, the effect on equilibrium price depends on the relative magnitude of the shifts. If demand increases more than supply, price will rise; if supply increases more than demand, price will fall.",
      },
      {
        question: "Which of the following goods is likely to have the most inelastic demand?",
        options: {
          a: "Luxury vacations",
          b: "Designer clothing",
          c: "Insulin for diabetics",
          d: "Entertainment subscriptions",
        },
        correctAnswer: "c",
        explanation:
          "Insulin for diabetics is a necessity with few substitutes, making its demand highly inelastic. Consumers need it regardless of price changes, whereas the other options are more discretionary purchases.",
      },
      {
        question: "What is consumer surplus?",
        options: {
          a: "The area above the supply curve and below the market price",
          b: "The area below the demand curve and above the market price",
          c: "The area where supply equals demand",
          d: "The difference between total revenue and total cost",
        },
        correctAnswer: "b",
        explanation:
          "Consumer surplus is the area below the demand curve and above the market price. It represents the difference between what consumers are willing to pay and what they actually pay.",
      },
      {
        question: "Which of the following would NOT cause a shift in the demand curve?",
        options: {
          a: "A change in consumer income",
          b: "A change in the price of the good",
          c: "A change in consumer preferences",
          d: "A change in the price of a complementary good",
        },
        correctAnswer: "b",
        explanation:
          "A change in the price of the good itself causes movement along the existing demand curve, not a shift. The other factors would cause the entire demand curve to shift.",
      },
      {
        question:
          "If two goods are substitutes, what happens to the demand for Good A when the price of Good B increases?",
        options: {
          a: "Demand for Good A increases",
          b: "Demand for Good A decreases",
          c: "Demand for Good A is unaffected",
          d: "Cannot be determined without more information",
        },
        correctAnswer: "a",
        explanation:
          "When goods are substitutes, an increase in the price of one good (B) makes consumers switch to the alternative good (A), increasing demand for Good A.",
      },
      {
        question: "What is the primary difference between a change in quantity demanded and a change in demand?",
        options: {
          a: "A change in quantity demanded is caused by a change in price, while a change in demand is caused by non-price factors",
          b: "A change in quantity demanded shifts the demand curve, while a change in demand causes movement along the curve",
          c: "A change in quantity demanded affects supply, while a change in demand does not",
          d: "There is no difference; the terms are interchangeable",
        },
        correctAnswer: "a",
        explanation:
          "A change in quantity demanded refers to movement along the existing demand curve due to a price change. A change in demand refers to a shift of the entire curve due to non-price factors like income or preferences.",
      },
      {
        question: "In a perfectly competitive market, individual firms are:",
        options: {
          a: "Price makers",
          b: "Price takers",
          c: "Able to influence market prices",
          d: "Monopolists in their specific product category",
        },
        correctAnswer: "b",
        explanation:
          "In a perfectly competitive market, individual firms are price takers, meaning they must accept the market price determined by overall supply and demand. They are too small to influence the market price on their own.",
      },
      {
        question: "What happens to the supply curve when production technology improves?",
        options: {
          a: "The supply curve shifts to the right",
          b: "The supply curve shifts to the left",
          c: "There is movement along the supply curve",
          d: "The supply curve becomes flatter",
        },
        correctAnswer: "a",
        explanation:
          "Technological improvements typically reduce production costs, allowing producers to supply more at every price level. This causes the entire supply curve to shift to the right.",
      },
      {
        question: "Which of the following would likely have the most elastic supply in the short run?",
        options: {
          a: "Custom-built homes",
          b: "Crude oil",
          c: "Hand-crafted furniture",
          d: "Digital products like e-books",
        },
        correctAnswer: "d",
        explanation:
          "Digital products like e-books have highly elastic supply in the short run because additional copies can be produced almost instantly at minimal cost. The other options have significant production constraints in the short run.",
      },
    ],
  },
  gdp: {
    title: "Gross Domestic Product (GDP)",
    icon: <BarChart className="h-8 w-8 text-blue-500" />,
    content: [
      "Gross Domestic Product (GDP) is the total monetary value of all finished goods and services produced within a country's borders in a specific time period. It serves as a comprehensive scorecard of a country's economic health and is the most widely used measure of economic activity.",

      "GDP can be calculated using three different approaches, all of which should yield the same result: the production (or output) approach, the income approach, and the expenditure approach. The most commonly used is the expenditure approach, which adds up all spending on final goods and services.",

      "The expenditure approach calculates GDP as the sum of: Consumer spending (C) + Business investment (I) + Government spending (G) + Net exports (X - M). This is often written as the equation: GDP = C + I + G + (X - M).",

      "Consumer spending includes all private consumption of goods and services. Business investment includes all capital expenditures by businesses and new home construction. Government spending includes all government consumption and investment but excludes transfer payments like social security. Net exports are exports minus imports.",

      "There are two types of GDP: nominal GDP and real GDP. Nominal GDP measures the value of all goods and services produced at current market prices. Real GDP adjusts for inflation by measuring output using the prices of a fixed base year. Real GDP provides a more accurate picture of economic growth over time by removing the effects of price changes.",

      "GDP growth rate is the percentage change in GDP from one period to another, typically measured quarterly or annually. A positive growth rate indicates economic expansion, while a negative growth rate indicates economic contraction or recession. Most developed economies aim for a steady GDP growth rate of around 2-3% per year.",

      "While GDP is a valuable economic indicator, it has several limitations. It doesn't account for non-market activities like household work, volunteer services, or the underground economy. It doesn't measure income distribution or inequality. It doesn't account for environmental degradation or resource depletion. And it doesn't directly measure quality of life or well-being.",

      "To address some of these limitations, economists have developed alternative measures such as GDP per capita (GDP divided by population), which gives a better indication of average living standards; Gross National Income (GNI), which includes income earned by a country's residents and businesses abroad; and the Human Development Index (HDI), which combines GDP per capita with measures of education and life expectancy.",
    ],
    videos: [
      {
        title: "GDP and the Circular Flow- Macro Topic 2.1",
        url: "https://www.youtube.com/watch?v=vLlZVLhS7z8",
        duration: "9:14",
      },
      {
        title: "Nominal vs. Real GDP",
        url: "https://www.youtube.com/watch?v=qWBZjD8ULy4",
        duration: "7:12",
      },
      {
        title: "The Limitations of GDP",
        url: "https://www.youtube.com/watch?v=QUaJMNtW6GA",
        duration: "11:48",
      },
    ],
    quiz: [
      {
        question: "What does GDP measure?",
        options: {
          a: "The total value of all goods and services produced within a country's borders in a specific time period",
          b: "The total income earned by a country's citizens, regardless of where they live",
          c: "The total value of all goods and services consumed by a country's residents",
          d: "The total value of all financial transactions in an economy",
        },
        correctAnswer: "a",
        explanation:
          "GDP (Gross Domestic Product) measures the total monetary value of all finished goods and services produced within a country's borders in a specific time period, regardless of who owns the means of production.",
      },
      {
        question: "Using the expenditure approach, GDP is calculated as:",
        options: {
          a: "C + S + T",
          b: "C + I + G + (X - M)",
          c: "C + I + G + X + M",
          d: "Wages + Rent + Interest + Profit",
        },
        correctAnswer: "b",
        explanation:
          "The expenditure approach calculates GDP as the sum of Consumer spending (C) + Business investment (I) + Government spending (G) + Net exports (X - M).",
      },
      {
        question: "What is NOT included in GDP calculations?",
        options: {
          a: "Services provided by a hair salon",
          b: "Used car sales between individuals",
          c: "Construction of a new office building",
          d: "Government spending on military equipment",
        },
        correctAnswer: "b",
        explanation:
          "Used car sales between individuals are not included in GDP because they represent transfers of existing goods, not new production. GDP only counts the production of new goods and services.",
      },
      {
        question: "What is the difference between nominal GDP and real GDP?",
        options: {
          a: "Nominal GDP includes services, while real GDP only includes goods",
          b: "Nominal GDP is measured in current prices, while real GDP is adjusted for inflation",
          c: "Nominal GDP is calculated quarterly, while real GDP is calculated annually",
          d: "Nominal GDP includes government spending, while real GDP excludes it",
        },
        correctAnswer: "b",
        explanation:
          "Nominal GDP measures output at current market prices, while real GDP adjusts for inflation by measuring output using the prices of a fixed base year. This allows for more accurate comparisons of economic output over time.",
      },
      {
        question: "If a country's nominal GDP increased by 5% and inflation was 3%, what was the real GDP growth rate?",
        options: {
          a: "2%",
          b: "3%",
          c: "5%",
          d: "8%",
        },
        correctAnswer: "a",
        explanation:
          "To calculate real GDP growth, we subtract the inflation rate from the nominal GDP growth rate: 5% - 3% = 2%. This gives us the growth in output after removing the effects of price changes.",
      },
      {
        question: "Which of the following would increase a country's GDP?",
        options: {
          a: "A citizen buying shares of stock in a domestic company",
          b: "The government making social security payments to retirees",
          c: "A company building a new factory",
          d: "A family selling their used car to another family",
        },
        correctAnswer: "c",
        explanation:
          "Building a new factory counts as business investment (I), which is a component of GDP. Stock purchases and used car sales are transfers of existing assets, not new production. Social security payments are transfer payments, not government spending on goods or services.",
      },
      {
        question: "GDP per capita is:",
        options: {
          a: "GDP divided by the working-age population",
          b: "GDP divided by the total population",
          c: "GDP multiplied by the population growth rate",
          d: "GDP adjusted for purchasing power parity",
        },
        correctAnswer: "b",
        explanation:
          "GDP per capita is calculated by dividing a country's GDP by its total population. It gives a measure of the average economic output per person and is often used as a rough indicator of average living standards.",
      },
      {
        question: "Which of the following is a limitation of GDP as a measure of economic well-being?",
        options: {
          a: "It doesn't account for income distribution or inequality",
          b: "It's too difficult to calculate accurately",
          c: "It changes too frequently to be useful",
          d: "It only measures agricultural output",
        },
        correctAnswer: "a",
        explanation:
          "GDP doesn't tell us how income is distributed among a country's population. A country could have a high GDP but with most of the wealth concentrated among a small percentage of the population, leaving many people in poverty.",
      },
      {
        question:
          "If a U.S. company builds and operates a factory in Mexico, the output of that factory is counted in:",
        options: {
          a: "U.S. GDP only",
          b: "Mexican GDP only",
          c: "Both U.S. and Mexican GDP",
          d: "Neither U.S. nor Mexican GDP",
        },
        correctAnswer: "b",
        explanation:
          "GDP measures production within a country's borders, regardless of who owns the means of production. Since the factory is located in Mexico, its output is counted in Mexican GDP, even though the company is American.",
      },
      {
        question: "What happens to GDP if the government increases spending on infrastructure?",
        options: {
          a: "GDP increases",
          b: "GDP decreases",
          c: "GDP remains unchanged",
          d: "The effect on GDP cannot be determined",
        },
        correctAnswer: "a",
        explanation:
          "Government spending (G) is a component of GDP in the expenditure approach. If the government increases spending on infrastructure, all else being equal, GDP will increase.",
      },
      {
        question: "Which of the following activities would NOT be counted in GDP?",
        options: {
          a: "A farmer growing and selling crops",
          b: "A teacher providing education in a public school",
          c: "A parent caring for their own children at home",
          d: "A restaurant serving meals to customers",
        },
        correctAnswer: "c",
        explanation:
          "Unpaid household work, such as a parent caring for their own children, is not included in GDP calculations because it doesn't involve market transactions, even though it creates value.",
      },
      {
        question: "What is the 'underground economy' in relation to GDP?",
        options: {
          a: "Economic activities that take place underground, like mining",
          b: "Legal and illegal activities that are not reported to the government",
          c: "The economy of developing countries",
          d: "Economic activities that occurred in the past",
        },
        correctAnswer: "b",
        explanation:
          "The underground economy refers to economic activities that are not reported to the government, either because they are illegal (like drug trafficking) or to evade taxes (like unreported income). These activities are not captured in official GDP statistics.",
      },
      {
        question: "A recession is typically defined as:",
        options: {
          a: "A period of rising unemployment",
          b: "A period of rising inflation",
          c: "Two consecutive quarters of negative GDP growth",
          d: "A period of declining stock market values",
        },
        correctAnswer: "c",
        explanation:
          "A recession is commonly defined as two consecutive quarters of negative GDP growth. This indicates a significant contraction in economic activity.",
      },
      {
        question:
          "Which approach to calculating GDP adds up all income earned in the production of goods and services?",
        options: {
          a: "The expenditure approach",
          b: "The income approach",
          c: "The production approach",
          d: "The value-added approach",
        },
        correctAnswer: "b",
        explanation:
          "The income approach calculates GDP by summing all income earned in the production process, including wages, rent, interest, and profits. This should equal the value of all output produced.",
      },
      {
        question: "What is the GDP deflator?",
        options: {
          a: "A measure of the overall price level of all new goods and services in an economy",
          b: "The rate at which GDP decreases during a recession",
          c: "The difference between nominal and real GDP",
          d: "The percentage of GDP contributed by the service sector",
        },
        correctAnswer: "a",
        explanation:
          "The GDP deflator is a price index that measures the average price level of all goods and services included in GDP. It's used to convert nominal GDP to real GDP by removing the effects of inflation.",
      },
    ],
  },
  ppp: {
    title: "Purchasing Power Parity (PPP)",
    icon: <DollarSign className="h-8 w-8 text-amber-500" />,
    content: [
      "Purchasing Power Parity (PPP) is an economic theory that compares different countries' currencies through a 'basket of goods' approach. According to this concept, two currencies are in equilibrium when a basket of goods costs the same in both countries, taking into account the exchange rates.",

      "The basic principle behind PPP is the 'law of one price,' which states that in the absence of transaction costs and official barriers to trade, identical goods should cost the same in all countries when expressed in a common currency. If a particular good is cheaper in one country than another, traders would buy it in the cheaper country and sell it in the more expensive one, eventually equalizing the prices.",

      "The most famous illustration of PPP is the Big Mac Index, introduced by The Economist magazine in 1986. It compares the price of a McDonald's Big Mac across different countries as a way to determine whether currencies are overvalued or undervalued. Since Big Macs are produced locally with similar specifications worldwide, they serve as a standardized product for comparison.",

      "PPP is particularly useful for comparing living standards across countries. When we convert GDP using market exchange rates, countries with lower price levels appear poorer than they actually are in terms of material living standards. PPP adjustments correct for these price differences, providing a more accurate comparison of real income and consumption possibilities.",

      "For example, while China's GDP converted at market exchange rates is smaller than the United States', its PPP-adjusted GDP is actually larger. This reflects the fact that many goods and services (especially non-tradable ones like housing, personal services, etc.) are much cheaper in China than in the US.",

      "There are two main types of PPP calculations: absolute PPP, which compares the actual price levels between countries, and relative PPP, which compares the inflation rates between countries and assumes that exchange rates will adjust to offset the difference in inflation rates over time.",

      "While PPP provides valuable insights, it has limitations. The composition of the 'basket of goods' may not be representative of consumption patterns in all countries. Non-tradable goods and services (like haircuts or rent) can have persistent price differences across countries due to factors like labor costs. And quality differences in seemingly identical products can complicate comparisons.",

      "Despite these limitations, PPP remains an essential tool for international economic comparisons. Organizations like the World Bank, International Monetary Fund, and OECD use PPP calculations to compare economic output, productivity, and living standards across countries in a more meaningful way than market exchange rates allow.",
    ],
    videos: [
      {
        title: "Purchasing Power Parity (PPP) Explained",
        url: "https://www.youtube.com/watch?v=8NiXi-TJ-B4",
        duration: "8:45",
      },
      {
        title: "The Big Mac Index Explained",
        url: "https://www.youtube.com/watch?v=5XdYbmiva0I",
        duration: "6:23",
      },
      {
        title: "PPP vs Market Exchange Rates",
        url: "https://www.youtube.com/watch?v=tzXMnZ9_-WE",
        duration: "9:17",
      },
    ],
    quiz: [
      {
        question: "What is the basic principle behind Purchasing Power Parity (PPP)?",
        options: {
          a: "Currencies should be valued based on a country's gold reserves",
          b: "Exchange rates should adjust so that identical goods cost the same in different countries",
          c: "Countries with higher GDP should have stronger currencies",
          d: "All countries should adopt a single global currency",
        },
        correctAnswer: "b",
        explanation:
          "The fundamental principle behind PPP is the 'law of one price,' which states that identical goods should cost the same in all countries when expressed in a common currency, after accounting for exchange rates.",
      },
      {
        question: "The Big Mac Index is used to:",
        options: {
          a: "Compare the nutritional value of fast food across countries",
          b: "Measure obesity rates in different countries",
          c: "Determine whether currencies are overvalued or undervalued",
          d: "Track McDonald's global market share",
        },
        correctAnswer: "c",
        explanation:
          "The Big Mac Index, created by The Economist, compares the price of McDonald's Big Macs across countries as a way to determine whether currencies are overvalued or undervalued relative to each other, based on PPP theory.",
      },
      {
        question: "Why is PPP considered more useful than market exchange rates for comparing living standards?",
        options: {
          a: "PPP is easier to calculate",
          b: "PPP adjusts for differences in price levels between countries",
          c: "PPP is more stable over time",
          d: "PPP is the official method used by all governments",
        },
        correctAnswer: "b",
        explanation:
          "PPP adjusts for differences in price levels between countries. This provides a more accurate comparison of real income and consumption possibilities, as it reflects what people can actually buy with their money in their local economy.",
      },
      {
        question:
          "If a Big Mac costs $5.00 in the US and £4.00 in the UK, and the PPP exchange rate is £1 = $1.25, what can we conclude?",
        options: {
          a: "The pound is overvalued",
          b: "The pound is undervalued",
          c: "The pound is at its PPP value",
          d: "We cannot determine the pound's valuation without more information",
        },
        correctAnswer: "c",
        explanation:
          "At the exchange rate of £1 = $1.25, the UK Big Mac costs £4.00 × $1.25 = $5.00, which is the same as the US price. This means the exchange rate is at its PPP value according to the Big Mac Index.",
      },
      {
        question:
          "Which of the following would likely have the MOST similar price across countries when converted using market exchange rates?",
        options: {
          a: "A haircut",
          b: "Rent for an apartment",
          c: "A globally traded commodity like gold",
          d: "A restaurant meal",
        },
        correctAnswer: "c",
        explanation:
          "Globally traded commodities like gold tend to have the most similar prices across countries when converted using market exchange rates, due to arbitrage opportunities. Non-tradable services like haircuts, rent, and restaurant meals can vary significantly in price.",
      },
      {
        question: "What is absolute PPP?",
        options: {
          a: "The comparison of actual price levels between countries",
          b: "The comparison of inflation rates between countries",
          c: "The maximum purchasing power a currency can have",
          d: "The purchasing power of a currency without government intervention",
        },
        correctAnswer: "a",
        explanation:
          "Absolute PPP compares the actual price levels between countries to determine what exchange rate would make the cost of a basket of goods the same in both countries.",
      },
      {
        question:
          "According to relative PPP, if Country A has 5% inflation and Country B has 3% inflation, what should happen to their exchange rate?",
        options: {
          a: "Country A's currency should appreciate by 2%",
          b: "Country A's currency should depreciate by 2%",
          c: "Country B's currency should depreciate by 2%",
          d: "The exchange rate should remain unchanged",
        },
        correctAnswer: "b",
        explanation:
          "According to relative PPP, if Country A has higher inflation than Country B (5% vs. 3%), Country A's currency should depreciate relative to Country B's currency by approximately the inflation differential (2%) to maintain PPP.",
      },
      {
        question:
          "Which organization produces the most comprehensive global PPP comparisons through its International Comparison Program?",
        options: {
          a: "The Federal Reserve",
          b: "The World Bank",
          c: "The Economist magazine",
          d: "McDonald's Corporation",
        },
        correctAnswer: "b",
        explanation:
          "The World Bank, through its International Comparison Program (ICP), produces the most comprehensive global PPP comparisons, collecting detailed price data for thousands of goods and services across countries.",
      },
      {
        question: "Why might PPP calculations be less accurate for comparing developing and advanced economies?",
        options: {
          a: "Developing economies don't produce reliable economic statistics",
          b: "The basket of goods used may not reflect consumption patterns in developing economies",
          c: "Advanced economies manipulate their currency values",
          d: "PPP only works for countries with similar GDP levels",
        },
        correctAnswer: "b",
        explanation:
          "PPP calculations may be less accurate for comparing developing and advanced economies because the standard basket of goods used may not reflect typical consumption patterns in developing economies, where spending priorities and available products can differ significantly.",
      },
      {
        question: "What is the 'Penn effect' in international economics?",
        options: {
          a: "The tendency for market exchange rates to return to PPP levels over time",
          b: "The tendency for rich countries to have higher price levels than poor countries",
          c: "The tendency for countries with trade surpluses to have overvalued currencies",
          d: "The tendency for inflation rates to converge across trading partners",
        },
        correctAnswer: "b",
        explanation:
          "The Penn effect refers to the empirical observation that rich countries tend to have higher price levels than poor countries when measured at market exchange rates. This is primarily due to higher prices for non-tradable services in wealthy countries.",
      },
      {
        question:
          "If a country's GDP measured at market exchange rates is $1 trillion, but its PPP-adjusted GDP is $1.5 trillion, what can we conclude?",
        options: {
          a: "The country's currency is overvalued",
          b: "The country's currency is undervalued",
          c: "The country has a higher price level than the reference country",
          d: "The country has a lower price level than the reference country",
        },
        correctAnswer: "d",
        explanation:
          "If PPP-adjusted GDP is higher than GDP at market exchange rates, it indicates that the country has a lower price level than the reference country (usually the US). This means people can buy more goods and services with their money locally than the market exchange rate would suggest.",
      },
      {
        question: "Which of the following goods would LEAST likely follow the law of one price internationally?",
        options: {
          a: "Gold",
          b: "Crude oil",
          c: "Haircuts",
          d: "Smartphones",
        },
        correctAnswer: "c",
        explanation:
          "Haircuts are a non-tradable service that cannot be easily arbitraged across borders. Labor-intensive services like haircuts tend to be cheaper in countries with lower wages, while tradable goods like gold, oil, and electronics tend to have more similar prices internationally.",
      },
      {
        question: "What is the main criticism of using the Big Mac Index for PPP comparisons?",
        options: {
          a: "Big Macs taste different in different countries",
          b: "Big Mac prices may be affected by factors other than general price levels",
          c: "McDonald's is not present in enough countries",
          d: "The Big Mac is too expensive for most consumers",
        },
        correctAnswer: "b",
        explanation:
          "A main criticism of the Big Mac Index is that Big Mac prices may be affected by factors other than general price levels, such as local competition, business strategies, taxes, and regulations. These factors can distort the PPP comparison.",
      },
      {
        question:
          "In PPP calculations, which types of goods and services typically show the largest price differences across countries?",
        options: {
          a: "Globally traded commodities",
          b: "Manufactured goods",
          c: "Non-tradable services",
          d: "Agricultural products",
        },
        correctAnswer: "c",
        explanation:
          "Non-tradable services (like haircuts, education, healthcare, and housing) typically show the largest price differences across countries in PPP calculations. These services cannot be traded internationally and their prices are strongly influenced by local labor costs.",
      },
      {
        question:
          "What happens to a country's PPP-adjusted GDP relative to its nominal GDP when its currency depreciates?",
        options: {
          a: "PPP-adjusted GDP increases relative to nominal GDP",
          b: "PPP-adjusted GDP decreases relative to nominal GDP",
          c: "Both PPP-adjusted and nominal GDP decrease by the same amount",
          d: "There is no effect on the relationship between PPP-adjusted and nominal GDP",
        },
        correctAnswer: "a",
        explanation:
          "When a country's currency depreciates, its nominal GDP expressed in international currency (e.g., USD) decreases. However, if domestic prices don't change immediately, the PPP-adjusted GDP remains more stable. This increases the ratio of PPP-adjusted GDP to nominal GDP.",
      },
    ],
  },
  inflation: {
    title: "Inflation",
    icon: <BookOpen className="h-8 w-8 text-rose-500" />,
    content: [
      "Inflation is the rate at which the general level of prices for goods and services rises, leading to a decrease in purchasing power. It's typically measured as an annual percentage increase. For example, if inflation is 2%, then a basket of goods that cost $100 last year would cost $102 this year.",

      "There are several types of inflation. Demand-pull inflation occurs when aggregate demand exceeds aggregate supply, pulling prices up. Cost-push inflation happens when the costs of production increase, pushing prices up. Built-in inflation results from adaptive expectations, where workers and businesses come to expect future inflation and build this into their wage demands and price setting.",

      "Inflation is typically measured using price indexes. The Consumer Price Index (CPI) measures the average change in prices paid by urban consumers for a basket of goods and services. The Producer Price Index (PPI) measures average changes in selling prices received by domestic producers. The GDP deflator is a broader measure that reflects prices of all goods and services produced in an economy.",

      "Central banks, like the Federal Reserve in the US, are responsible for managing inflation through monetary policy. They typically target a low, stable inflation rate (often around 2%) that balances the risks of inflation and deflation. They use tools like interest rates to influence economic activity and inflation. When inflation is too high, central banks raise interest rates to cool the economy; when it's too low, they lower rates to stimulate growth.",

      "Moderate inflation (1-3% per year) is generally considered beneficial for an economy. It encourages spending and investment rather than holding cash, which loses value during inflation. It also makes it easier for relative prices to adjust and for the economy to adapt to shocks. However, high or unpredictable inflation can be harmful, creating uncertainty, discouraging long-term planning, and potentially leading to a wage-price spiral.",

      "Deflation, the opposite of inflation, occurs when the general price level falls. While this might seem beneficial for consumers, persistent deflation can be harmful to an economy. It can lead to decreased spending (as consumers delay purchases expecting lower prices), increased real debt burdens, and lower profits for businesses, potentially triggering a deflationary spiral.",

      "Hyperinflation is extreme inflation, typically defined as inflation exceeding 50% per month. It's often caused by excessive money creation, usually to finance government deficits. Historical examples include Germany in the 1920s, Zimbabwe in the late 2000s, and Venezuela more recently. Hyperinflation can devastate economies, wiping out savings and making normal economic activity nearly impossible.",

      "Understanding inflation is crucial for individuals, businesses, and policymakers. For individuals, it affects purchasing power, savings, and investment decisions. For businesses, it influences pricing strategies, wage negotiations, and long-term planning. For policymakers, managing inflation is a key aspect of maintaining economic stability and promoting sustainable growth.",
    ],
    videos: [
      {
        title: "Inflation Explained in One Minute",
        url: "https://www.youtube.com/watch?v=UMAELCrJxt0",
        duration: "1:15",
      },
      {
        title: "The Phillips Curve (Macro Review)",
        url: "https://www.youtube.com/watch?v=vwPzJJHNB9o",
        duration: "5:42",
      },
      {
        title: "Monetary Policy and the Federal Reserve",
        url: "https://www.youtube.com/watch?v=1dq7mMort9o",
        duration: "10:16",
      },
    ],
    quiz: [
      {
        question: "What is inflation?",
        options: {
          a: "The rate at which the general level of prices for goods and services rises",
          b: "The rate at which wages increase in an economy",
          c: "The rate at which the money supply increases",
          d: "The rate at which interest rates change",
        },
        correctAnswer: "a",
        explanation:
          "Inflation is the rate at which the general level of prices for goods and services rises over time, leading to a decrease in the purchasing power of money.",
      },
      {
        question: "Which of the following is NOT a common measure of inflation?",
        options: {
          a: "Consumer Price Index (CPI)",
          b: "Producer Price Index (PPI)",
          c: "GDP deflator",
          d: "Gini coefficient",
        },
        correctAnswer: "d",
        explanation:
          "The Gini coefficient is a measure of income inequality, not inflation. The CPI, PPI, and GDP deflator are all common measures used to track inflation in different sectors of the economy.",
      },
      {
        question: "Demand-pull inflation occurs when:",
        options: {
          a: "Production costs increase",
          b: "Aggregate demand exceeds aggregate supply",
          c: "The central bank increases interest rates",
          d: "Workers demand higher wages",
        },
        correctAnswer: "b",
        explanation:
          "Demand-pull inflation occurs when aggregate demand in an economy exceeds aggregate supply, 'pulling' prices up as too much money chases too few goods.",
      },
      {
        question: "What is the typical inflation target for most central banks in developed economies?",
        options: {
          a: "0%",
          b: "Around 2%",
          c: "5-7%",
          d: "10%",
        },
        correctAnswer: "b",
        explanation:
          "Most central banks in developed economies, including the Federal Reserve, the European Central Bank, and the Bank of England, target an inflation rate of around 2%. This level is considered low enough to avoid the problems of high inflation but high enough to avoid the risks of deflation.",
      },
      {
        question: "Which of the following is a potential negative effect of high inflation?",
        options: {
          a: "Increased purchasing power",
          b: "Lower real interest rates",
          c: "Uncertainty that discourages investment",
          d: "Reduced government debt burden",
        },
        correctAnswer: "c",
        explanation:
          "High inflation creates uncertainty about future prices, which can discourage businesses from making long-term investments. This can harm economic growth and productivity.",
      },
      {
        question: "What is deflation?",
        options: {
          a: "A decrease in the general price level",
          b: "A decrease in the money supply",
          c: "A decrease in economic output",
          d: "A decrease in unemployment",
        },
        correctAnswer: "a",
        explanation:
          "Deflation is a decrease in the general price level of goods and services. It's the opposite of inflation and can be harmful to an economy if persistent.",
      },
      {
        question: "How does the Federal Reserve typically respond to high inflation?",
        options: {
          a: "By lowering interest rates",
          b: "By increasing government spending",
          c: "By raising interest rates",
          d: "By decreasing taxes",
        },
        correctAnswer: "c",
        explanation:
          "When inflation is too high, the Federal Reserve typically raises interest rates to cool down the economy. Higher interest rates make borrowing more expensive, which reduces spending and investment, helping to bring inflation down.",
      },
      {
        question: "What is the Fisher equation in economics?",
        options: {
          a: "Real interest rate = Nominal interest rate - Inflation rate",
          b: "Nominal interest rate = Real interest rate + Inflation rate",
          c: "Inflation rate = Nominal interest rate - Real interest rate",
          d: "Real interest rate = Nominal interest rate × Inflation rate",
        },
        correctAnswer: "b",
        explanation:
          "The Fisher equation states that the nominal interest rate equals the real interest rate plus the expected inflation rate. This relationship helps explain why nominal interest rates tend to rise with inflation.",
      },
      {
        question: "Which of the following groups typically benefits from unexpected inflation?",
        options: {
          a: "Retirees living on fixed pensions",
          b: "Borrowers with fixed-rate loans",
          c: "Lenders who have made fixed-rate loans",
          d: "People holding large amounts of cash",
        },
        correctAnswer: "b",
        explanation:
          "Borrowers with fixed-rate loans benefit from unexpected inflation because they repay their loans with money that has less purchasing power than expected. This effectively reduces the real value of their debt.",
      },
      {
        question: "What is hyperinflation?",
        options: {
          a: "Inflation that exceeds 10% per year",
          b: "Inflation that exceeds 50% per month",
          c: "Inflation that exceeds 100% per year",
          d: "Inflation that exceeds the central bank's target",
        },
        correctAnswer: "b",
        explanation:
          "Hyperinflation is extremely high inflation, typically defined as inflation exceeding 50% per month. It's a rare but devastating economic phenomenon that can destroy the value of a currency and severely disrupt economic activity.",
      },
      {
        question: "What is the Phillips Curve?",
        options: {
          a: "The relationship between inflation and interest rates",
          b: "The relationship between inflation and unemployment",
          c: "The relationship between inflation and economic growth",
          d: "The relationship between inflation and the money supply",
        },
        correctAnswer: "b",
        explanation:
          "The Phillips Curve illustrates the historical inverse relationship between inflation and unemployment. It suggests that lower unemployment is associated with higher inflation, and vice versa. However, this relationship has been questioned in recent decades as stagflation (high inflation with high unemployment) has occurred.",
      },
      {
        question: "What is cost-push inflation?",
        options: {
          a: "Inflation caused by increasing production costs",
          b: "Inflation caused by excessive demand",
          c: "Inflation caused by government spending",
          d: "Inflation caused by low interest rates",
        },
        correctAnswer: "a",
        explanation:
          "Cost-push inflation occurs when the overall price level increases due to increases in the cost of production inputs, such as raw materials, wages, or energy prices. These higher costs 'push' prices up as businesses pass them on to consumers.",
      },
      {
        question: "What is the 'menu cost' of inflation?",
        options: {
          a: "The cost of food in restaurants during inflation",
          b: "The cost of updating price lists and catalogs when prices change",
          c: "The cost of calculating inflation rates",
          d: "The cost of printing new currency during inflation",
        },
        correctAnswer: "b",
        explanation:
          "Menu costs refer to the expenses businesses incur when they have to update their prices due to inflation. This includes the cost of reprinting menus, catalogs, and price lists, as well as the time and resources spent on deciding new prices.",
      },
      {
        question: "What is 'shoe leather cost' in the context of inflation?",
        options: {
          a: "The increased cost of shoes during inflation",
          b: "The resources wasted as people try to minimize their cash holdings",
          c: "The cost of walking to multiple stores to find the best prices",
          d: "The cost of replacing worn-out shoes due to increased shopping",
        },
        correctAnswer: "b",
        explanation:
          "Shoe leather costs refer to the resources wasted as people try to minimize their cash holdings during inflation (since cash loses value). This includes time and effort spent making more frequent trips to the bank or financial institutions to move money into interest-bearing assets.",
      },
      {
        question: "Which of the following is an example of built-in inflation?",
        options: {
          a: "Oil prices rise, causing transportation costs to increase",
          b: "Consumer spending increases rapidly due to economic optimism",
          c: "Workers demand higher wages because they expect prices to rise",
          d: "The central bank increases the money supply",
        },
        correctAnswer: "c",
        explanation:
          "Built-in inflation results from adaptive expectations, where workers and businesses come to expect future inflation and build this into their wage demands and price setting. When workers demand higher wages because they expect prices to rise, it creates a self-reinforcing cycle of inflation.",
      },
    ],
  },
}
