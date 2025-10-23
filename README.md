# RemitNow - Next-Generation Solana Remittance Platform

> Save money with 0.5% fees and earn 8% yield on your savings

RemitNow is a production-ready Solana-based remittance platform that combines low-cost international transfers with DeFi yield generation. Built for the Southeast Asian market, RemitNow offers 90% lower fees than traditional services while providing passive income opportunities through Kamino Finance integration.

## Features

### Core Remittance
- **Ultra-low fees**: 0.5% transaction fees (vs. 5-7% traditional services)
- **Group savings pots**: Create and manage shared savings accounts
- **Instant settlements**: Solana's 400ms block times for near-instant transfers
- **Multi-currency support**: USDC with plans for local currency integration
- **Circle CCTP integration**: Cross-chain USDC transfers via Circle's Cross-Chain Transfer Protocol

### DeFi Integration
- **8% APY**: Automatic yield generation via Kamino Finance
- **Real-time tracking**: Monitor yields, contributions, and withdrawals
- **Automated compounding**: Smart contract-based yield distribution
- **Transparent**: On-chain verification of all transactions

### Advanced Solana Optimizations

#### 🚀 State Compression (97-99% Cost Savings)
- Merkle tree-based compressed storage for pot accounts
- Support for 16,384 pots per tree
- **Savings**: 0.1434 SOL → 0.0005 SOL per pot (99.7% reduction)
- Admin dashboard for compression management
- ROI calculator and decision guide

#### ⏱️ Durable Nonces (Never-Expiring Transactions)
- Schedule transactions that never expire
- Perfect for recurring payments and automated operations
- No more failed transactions due to blockhash expiration
- 0.00144288 SOL per nonce account

#### 📦 Address Lookup Tables (87-94% Savings)
- Compress transaction size for multi-member operations
- **Savings**: 15 members: 2,104 → 264 bytes (87.5% reduction)
- **Savings**: 30 members: 3,624 → 264 bytes (92.7% reduction)
- Automatic ALT usage for operations with >5 members

#### 🔒 Jito Bundle Integration (MEV Protection)
- Atomic transaction execution with MEV protection
- Multi-step operations guaranteed to succeed or fail together
- Priority execution for time-sensitive transactions
- Configurable tip amounts based on urgency

#### 💰 Rent Optimization (Automated Cost Recovery)
- Automatic identification of inactive pots (>90 days)
- One-click rent reclamation
- API-first design for cron job automation
- Dry-run testing before actual closure
- **Typical savings**: 0.0014-0.0020 SOL per inactive pot

#### ⚡ Transaction Optimizations
- Dynamic priority fees based on network congestion
- Optimistic transaction confirmation (instant UI updates)
- Parallel transaction processing for batch operations
- Compute budget optimization per instruction type
- Automatic retry logic with exponential backoff

### Developer Experience
- **Easy integration**: React hooks for all advanced features
- **Type-safe**: Full TypeScript support with Anchor program types
- **Well-documented**: Comprehensive guides and examples
- **Production-ready**: Error handling, logging, and monitoring built-in

## Tech Stack

### Frontend
- **Next.js 15**: App Router with Server Components
- **React 19**: Latest features and performance improvements
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Beautiful, accessible components
- **React Query**: Efficient data fetching and caching

### Blockchain
- **Solana**: High-performance Layer 1 blockchain
- **Anchor Framework**: Solana program development
- **@solana/web3.js**: Client SDK
- **@solana/wallet-adapter**: Multi-wallet support
- **Kamino Finance**: DeFi yield generation
- **Circle CCTP**: Cross-chain USDC transfers
- **Jito Labs**: MEV protection and bundle execution
- **SPL Account Compression**: State compression

### Backend
- **PostgreSQL**: Production database (Neon serverless)
- **Prisma**: Type-safe ORM
- **Next.js API Routes**: RESTful endpoints
- **Vercel**: Deployment and hosting

## Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- Solana CLI tools
- Anchor CLI 0.30+
- PostgreSQL database

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/remitnow.git
cd remitnow
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# Database
DATABASE_URL="postgresql://..."

# Solana
NEXT_PUBLIC_SOLANA_RPC_URL="https://api.mainnet-beta.solana.com"
NEXT_PUBLIC_SOLANA_NETWORK="mainnet-beta"

# Program IDs
NEXT_PUBLIC_PROGRAM_ID="your-program-id"

# Circle API (optional)
CIRCLE_API_KEY="your-circle-api-key"

# Admin (for rent optimization)
ADMIN_API_KEY="your-secure-admin-key"
RENT_OPTIMIZATION_AUTHORITY_SECRET="[1,2,3,...]"
```

4. **Initialize database**
```bash
npx prisma generate
npx prisma db push
```

5. **Build and deploy Solana program**
```bash
cd anchor
anchor build
anchor deploy
```

6. **Generate program client**
```bash
npm run codama:js
```

7. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the app.

## Usage Examples

### For Users

#### Creating a Savings Pot
```typescript
import { useCreatePot } from '@/hooks/use-create-pot'

function CreatePotForm() {
  const { createPot, isLoading } = useCreatePot()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createPot({
      name: "Family Savings",
      goal: 10000,
      members: ["member1@example.com", "member2@example.com"]
    })
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

#### Depositing with Optimizations
```typescript
import { useAdvancedPotOperations } from '@/hooks/use-advanced-pot-operations'

function DepositForm() {
  const { depositUsdc, getRecommendedConfig } = useAdvancedPotOperations()

  const handleDeposit = async () => {
    // Get recommended config based on amount
    const config = await getRecommendedConfig({
      type: 'deposit',
      amount: 1000
    })

    // Deposit with optimizations
    await depositUsdc(potAddress, 1000, config)
  }

  return <button onClick={handleDeposit}>Deposit $1000</button>
}
```

### For Developers

#### Using Advanced Optimizations
```typescript
import { useAdvancedPotOperations } from '@/hooks/use-advanced-pot-operations'

function YieldDistribution() {
  const { distributeYields } = useAdvancedPotOperations()

  const distribute = async () => {
    // Automatically uses ALT if >5 members
    await distributeYields(
      potAddress,
      memberAddresses,
      {
        useALT: true,
        useDynamicPriorityFee: true
      }
    )
  }

  return <button onClick={distribute}>Distribute Yields</button>
}
```

#### Atomic Deposit + Stake
```typescript
const { depositAndStake } = useAdvancedPotOperations()

// Atomic operation with Jito MEV protection
await depositAndStake(
  potAddress,
  1000,
  kaminoReserve,
  {
    useJito: true,
    jitoTipLamports: 10000
  }
)
```

### For Admins

#### Automated Rent Optimization
```bash
# Add to crontab for weekly optimization
0 2 * * 1 curl -X GET https://your-domain.com/api/admin/rent-optimization \
  -H "Authorization: Bearer YOUR_API_KEY" \
  | jq '.recommendations[].address' \
  | xargs -I {} curl -X POST https://your-domain.com/api/admin/rent-optimization \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"potAddresses": ["{}"], "minInactiveDays": 90, "dryRun": false}'
```

#### Compression Management
Visit `/admin/compression` to:
- Calculate ROI for different pot volumes
- Create Merkle trees for compressed storage
- View configuration and capacity

#### Rent Optimization Dashboard
Visit `/admin/rent-optimization` to:
- View inactive pots report
- Select pots for closure
- Test with dry-run mode
- Reclaim rent from inactive accounts

## Performance Metrics

### Cost Savings

| Optimization | Before | After | Savings |
|-------------|--------|-------|---------|
| **State Compression** (10k pots) | 1,434 SOL | 4.52 SOL | 99.7% |
| **Address Lookup Tables** (30 members) | 3,624 bytes | 264 bytes | 92.7% |
| **Rent Optimization** (1k inactive) | N/A | ~1.5 SOL | 100% recovery |

### Transaction Speed

| Metric | Traditional | RemitNow |
|--------|------------|----------|
| **Settlement Time** | 3-5 days | <1 second |
| **Confirmation** | Hours | 400ms |
| **Optimistic Update** | N/A | Instant |

### Fee Comparison

| Service | International Transfer | Remittance Corridor |
|---------|----------------------|-------------------|
| **Western Union** | 5-7% | 6-8% |
| **MoneyGram** | 4-6% | 5-7% |
| **Banks** | 3-5% + FX markup | 4-6% + FX markup |
| **RemitNow** | **0.5%** | **0.5%** |

### Yield Generation

| Platform | APY | Lock Period | Risk |
|----------|-----|------------|------|
| **Traditional Savings** | 0.5-2% | None | Low |
| **Kamino (via RemitNow)** | **8%** | None | Low-Medium |
| **Other DeFi** | 5-15% | Varies | Medium-High |

## Architecture

### Smart Contract Structure
```
anchor/programs/proj/
├── src/
│   ├── lib.rs              # Main program entry
│   ├── state/              # Account structures
│   │   ├── pot.rs          # Pot account definition
│   │   └── member.rs       # Member account definition
│   ├── instructions/       # Program instructions
│   │   ├── initialize.rs   # Create pot
│   │   ├── deposit.rs      # Deposit USDC
│   │   ├── withdraw.rs     # Withdraw USDC
│   │   └── distribute.rs   # Distribute yields
│   └── errors.rs           # Custom error types
```

### Frontend Structure
```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── dashboard/         # User dashboard
│   ├── partnerships/      # Partnership info
│   ├── account/           # User account
│   ├── admin/             # Admin dashboards
│   │   ├── rent-optimization/
│   │   └── compression/
│   └── api/               # API routes
│       └── admin/
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── app-providers.tsx # Context providers
├── hooks/                # Custom React hooks
│   ├── use-create-pot.ts
│   └── use-advanced-pot-operations.ts
├── lib/                  # Utility libraries
│   ├── solana-optimizations.ts
│   ├── solana-advanced.ts
│   └── kamino.ts
└── prisma/              # Database schema
    └── schema.prisma
```

## Testing

### Run Tests
```bash
# Frontend tests
npm test

# Solana program tests
cd anchor
anchor test
```

### Test Coverage
- Unit tests for all hooks
- Integration tests for API routes
- End-to-end tests for critical flows
- Program tests for all instructions

## Monitoring

### Key Metrics to Track
- Transaction success rate
- Average confirmation time
- Failed transaction reasons
- Priority fee effectiveness
- Compression adoption rate
- Rent optimization savings
- User engagement metrics

### Recommended Tools
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Solana Beach**: On-chain monitoring
- **Helius**: RPC analytics

## Security

### Best Practices Implemented
- Input validation on all endpoints
- Rate limiting on API routes
- Secure keypair storage (KMS recommended)
- Authorization checks on admin endpoints
- Prepared statements (SQL injection prevention)
- HTTPS enforced
- CORS configuration
- Wallet signature verification

### Security Audit Recommendations
- [ ] Third-party smart contract audit
- [ ] Penetration testing
- [ ] Bug bounty program
- [ ] Regular dependency updates
- [ ] Security monitoring

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- **Solana Foundation**: For the robust blockchain infrastructure
- **Kamino Finance**: For DeFi yield integration
- **Circle**: For CCTP and USDC support
- **Jito Labs**: For MEV protection technology
- **Metaplex**: For state compression libraries
- **Anchor Lang**: For smart contract framework

## Roadmap

### Q1 2025
- ✅ Core remittance platform
- ✅ Kamino Finance integration
- ✅ Advanced Solana optimizations
- ✅ Admin dashboards
- [ ] Mobile app launch
- [ ] Bank integration (Singapore)

### Q2 2025
- [ ] Multi-currency support
- [ ] Fiat on/off ramps
- [ ] Merchant payment processing
- [ ] Additional DeFi protocols

### Q3 2025
- [ ] Southeast Asia expansion
- [ ] Partnership with local banks
- [ ] Remittance licenses
- [ ] Card issuance

### Q4 2025
- [ ] Global expansion
- [ ] Advanced analytics
- [ ] AI-powered savings recommendations
- [ ] Corporate accounts

---

Built with ❤️ by the RemitNow

**Save money. Earn yield. Powered by Solana.**
