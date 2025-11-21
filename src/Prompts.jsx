import React from "react";
import MessageBlock from "./MessageBlock";

// Whale/Institutional Activity Prompt Page
export function WhaleActivityPrompt() {
  return (
    <div className="centered-content">
      <h2>Institutional & Whale Activity Stock Analysis Prompt</h2>
      <MessageBlock message={`**INSTITUTIONAL & WHALE ACTIVITY STOCK ANALYSIS - {TODAY'S DATE}**

Search the following sources for insider and institutional trading activity from the past 3 days:
- Finviz (insider trading, institutional ownership changes)
- QuiverQuant (congressional trades, insider trades, institutional flows)
- WhaleWisdom, Dataroma, or SEC Form 4 filings
- Major hedge fund 13F filings and recent position changes

**FIND:**
1. **Recent Insider Activity (Past 3 Days)**: Identify 5-10 stocks with significant insider PURCHASES and SALES by executives, directors, or 10%+ owners. Minimum transaction size: $100k.

2. **Institutional Moves (Past 3 Days)**: Identify major funds (Berkshire Hathaway, ARK, Tiger Global, Citadel, Bridgewater, etc.) that opened new positions or significantly increased/decreased existing holdings.

**FOR EACH STOCK PICK, PROVIDE:**

| Ticker | Current Price | Who's Trading | Trade Type (Buy/Sell) | Size | Date |
|--------|---------------|---------------|-----------------------|------|------|

**DETAILED ANALYSIS FOR EACH:**
- **Why they're buying/selling**: What's the bull case? What catalysts exist (earnings, product launch, sector rotation, macro trends)?
- **Quantitative 30-day price projection**: Based on historical performance after similar insider/institutional activity, technical indicators (RSI, MACD, moving averages), and current momentum - estimate potential price target in 30 days. Show your calculation methodology.
- **Background supporting the buy**: Company fundamentals, revenue growth, competitive position, recent news, sector tailwinds
- **Risk factors**: Why this could fail - debt levels, competition, regulatory risks, market conditions, valuation concerns, conflicting signals
- **Disaster scenarios**: Specific situations where this trade could "end terribly" (e.g., "If earnings miss by >10%", "If Fed raises rates unexpectedly", "If key customer contract lost")

**SECTOR PERFORMANCE**: In tabular format provide which sectors/industries have 
been performing the best-worst. The sectors can be general (ex: Technology) or 
specific (ex: Cloud Computing), but try to be as specific as possible. Provide 
performance for 1 day (previous day), 1 week, and 1 month.

**PORTFOLIO OPTIMIZATION SECTION:**
After presenting all picks, include this text:

"**PORTFOLIO REVIEW NEEDED**: Please share your current portfolio (tickers and position sizes). I will then:
- Identify which of today's opportunities best complement your existing holdings
- Flag any positions you should consider trimming based on recent insider selling
- Assess concentration risk and diversification gaps
- Suggest specific entry points and position sizing for new picks"

**IMMEDIATE ACTION ALERTS:**
- Flag any stocks from common portfolios with heavy insider selling in past 3 days
- Note any major institutional exits that could signal trouble
- Highlight urgent opportunities (e.g., insider buying before earnings, unusual whale accumulation)

**FORMAT**: Use tables for stock lists, bullet points for analysis. Make it scannable but comprehensive.`
      }
      markdown={true}
    />
    </div>
  );
}

// Social Media Hype Prompt Page
export function SocialMediaHypePrompt() {
  return (
    <div className="centered-content">
      <h2>Social Media Stock Hype Tracker Prompt</h2>
      <MessageBlock message={`**SOCIAL MEDIA STOCK HYPE TRACKER - {TODAY'S DATE} (Daily 9AM Report)**

Search these platforms for trending stock discussions from the past 24 hours:
- Reddit: r/wallstreetbets, r/pennystocks, r/stocks, r/investing, r/Shortsqueeze
- Twitter/X: $cashtags, FinTwit, stock promotion accounts
- StockTwits: trending tickers and room activity
- Instagram: Trading influencer posts and story mentions
- Discord: Public trading communities and pump groups
- Telegram: Known pump-and-dump channels (public ones)

**FOCUS**: Small-cap and micro-cap stocks (under $2B market cap). Include penny stocks. DO NOT filter out low-priced stocks.

**FIND TWO CATEGORIES:**

**CATEGORY A: ORGANIC HYPE (5-7 stocks)**
Stocks trending naturally with real community interest, NOT coordinated pumps.

| Ticker | Price | Market Cap | Platform(s) | Mention Count | Sentiment | Primary Thesis |
|--------|-------|------------|-------------|---------------|-----------|----------------|

**CATEGORY B: SUSPECTED PUMP-AND-DUMP SCHEMES (3-5 stocks)**
Stocks showing coordinated promotion patterns, bot activity, or known pump group involvement.

| Ticker | Price | Platform | Red Flags Detected | Promoter/Bot Accounts | Pump Timeline |
|--------|-------|----------|--------------------|-----------------------|---------------|

**FOR EACH STOCK IN BOTH CATEGORIES:**

1. **The Pitch**: What's the narrative driving the hype? (Short squeeze, FDA approval, crypto play, meme potential, etc.)

2. **Social Proof**: 
   - Mention volume (estimated number of posts/comments)
   - Engagement metrics (upvotes, retweets, likes)
   - Quality of discussion (genuine DD vs. rocket emojis)
   - Account age/credibility of promoters

3. **Price Action Context**:
   - Current price and 7-day change
   - Volume spike (% above average)
   - Recent chart pattern

4. **Why It Might Work** (Even for pump-and-dumps):
   - Could catch momentum before the dump
   - Legitimate underlying catalysts mixed with hype
   - Technical setup favorable for quick swing

5. **Why It's Risky**:
   - For organic plays: Overvaluation, weak fundamentals, regulatory issues
   - For pump-and-dumps: Specific red flags (coordinated posting times, bot accounts, suspicious volume, insider selling, known scam promoters)

6. **Disaster Scenario**:
   - For organic: "Hype fades with no catalyst, -40% in week"
   - For pumps: "Dump begins within 24-48 hours, -60-80% drop possible"

**PUMP-AND-DUMP SPECIFIC ANALYSIS:**
For Category B stocks, explicitly state:
- Estimated stage of pump (early accumulation, active pump, near dump, post-dump)
- Known promoter groups involved (if identifiable)
- Recommended approach: "Monitor only", "Quick scalp if experienced", "Avoid entirely"

**BOTTOM LINE:**
End with a clear summary: "Today's highest conviction organic play:", "Today's riskiest pump to avoid:", "Potential quick scalp opportunities (for experienced traders only):"

**FORMAT**: Tables for quick scanning, detailed breakdowns for each pick. Use warning emojis (🚨) for high-risk pump-and-dump stocks.`
      }
      markdown={true}
    />
    </div>
  );
}
